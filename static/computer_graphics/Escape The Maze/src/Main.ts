import InitWebGLProgram from './InitWebGLProgram.js'

import { GameObject }  from './GameObject.js'
import Player from './objects/Player.js'
import Wall from './objects/Wall.js'
import Floor from './objects/Floor.js'
import Torch from './objects/Torch.js'
import BadGuy from './objects/Bad_Guy.js'

type AttributeLocation = number

export const WSPACE = 40;
const BOUNDARY = WSPACE * 2;
const BL = 4;
const ENEMY_COUNT = 10;
const PLAYERLOC = -5 * WSPACE / 6;


async function loadShader(url: string): Promise<string> {
  const response = await fetch(url);
  return await response.text();
}

async function loadAtlas(): Promise<HTMLImageElement> {
    const img = new Image()
    img.src = '../assets/spritesheet.png';
    return new Promise((resolve) => {
        img.onload = () => resolve(img);
    });
}


export default async function get_main(): Promise<Main> {
    let FragmentShader = loadShader('/shaders/FragmentShader.frag');
    let VertexShader = loadShader('/shaders/VertexShader.vert');
    const img = loadAtlas();

    return new Main(await VertexShader, await FragmentShader, await img);
}


export class Main {
    webGL: InitWebGLProgram;
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    Scale: WebGLUniformLocation ;
    Rotation: WebGLUniformLocation;
    Transform: WebGLUniformLocation;
    CameraPos: WebGLUniformLocation;
    CameraRot: WebGLUniformLocation;
    pointLoc: WebGLUniformLocation;

    samplerAttLoc: AttributeLocation;
    positionAttLoc: AttributeLocation;

    samplerUniformLoc: WebGLUniformLocation;

    player: Player;
    walls: GameObject[] = [];
    decor: GameObject[] = [];
    enemies: GameObject[] = [];
    bullets: GameObject[] = [];
    enbullets: GameObject[] = [];

    lastTime: number = 0;
    floor: Floor;
    point_list: number[] = [];
    health_label: HTMLHeadingElement;
    yetWin: boolean = true;
    atlas: HTMLImageElement
    
    constructor(VertexShader3D: string, FragmentShader2D: string, atlas: HTMLImageElement) {
        this.atlas = atlas;
        this.health_label = document.getElementById("text-overlay") as HTMLHeadingElement
        const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

        canvas.height = window.screen.height / 2;
        canvas.width = window.screen.height / 2;
        const gl = canvas.getContext("webgl") as WebGLRenderingContext;
        this.gl = gl;
        
        this.webGL = new InitWebGLProgram(gl)

        let vertexShader: WebGLShader = this.webGL.createShader(gl.VERTEX_SHADER, VertexShader3D) as WebGLShader;
        let fragmentShader: WebGLShader = this.webGL.createShader(gl.FRAGMENT_SHADER, FragmentShader2D) as WebGLShader;

        this.program = this.webGL.createProgram(vertexShader, fragmentShader) as WebGLProgram;

        gl.useProgram(this.program);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);


        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.atlas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.activeTexture(gl.TEXTURE0);


        this.Transform = gl.getUniformLocation(this.program, 'trans') as WebGLUniformLocation;
        this.Rotation = gl.getUniformLocation(this.program, 'rotate') as WebGLUniformLocation;
        this.Scale = gl.getUniformLocation(this.program, 'scale') as WebGLUniformLocation;
        this.CameraPos = gl.getUniformLocation(this.program, 'camerapos') as WebGLUniformLocation;
        this.CameraRot = gl.getUniformLocation(this.program, 'camerarot') as WebGLUniformLocation;
        this.pointLoc = gl.getUniformLocation(this.program, 'pointLoc[0]') as WebGLUniformLocation;

        this.samplerAttLoc = gl.getAttribLocation(this.program, "texcord");
        this.positionAttLoc = gl.getAttribLocation(this.program, "a_position");

        this.samplerUniformLoc = gl.getUniformLocation(this.program, "sampler") as WebGLUniformLocation;
        gl.uniform1i(this.samplerUniformLoc, 0);


        this.player = new Player(gl, 3, [PLAYERLOC, 2, PLAYERLOC], [0, Math.PI / 4, 0], this.add_plobject.bind(this));

        this.floor = new Floor(gl, BOUNDARY + 10, [0,0,0]);

        const stone: boolean = true;

        // end
        this.walls.push(new Wall(gl, [BOUNDARY + 5, BL, BL], [ 0, 0, WSPACE + 3], [0,0,0], stone));
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY + 5], [ WSPACE + 3, 0, 0], [0,0,0], stone));

        // 4 boundary walls
        this.walls.push(new Wall(gl, [BOUNDARY, BL, BL], [ -5, 0, WSPACE], [0,0,0], stone));
        this.walls.push(new Wall(gl, [BOUNDARY, BL, BL], [  0, 0,-WSPACE], [0,0,0], stone));
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY], [ WSPACE, 0, -5], [0,0,0], stone));
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY], [-WSPACE, 0,  0], [0,0,0], stone));

        // 2 center walls
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY / 4], [ 0, 0, 0], [0,0,0]));
        this.walls.push(new Wall(gl, [BOUNDARY / 4, BL, BL], [0, 0, 0], [0,0,0]));

        // 4 side-center walls
        this.walls.push(new Wall(gl, [BOUNDARY / 3, BL, BL], [WSPACE, 0, 0], [0,0,0]));
        this.walls.push(new Wall(gl, [BOUNDARY / 3, BL, BL], [-WSPACE, 0, 0], [0,0,0]));
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY / 3], [0, 0, WSPACE], [0,0,0]));
        this.walls.push(new Wall(gl, [BL, BL, BOUNDARY / 3], [0, 0, -WSPACE], [0,0,0]));

        // 8 corner walls
        for(const [x, y] of [[1, 1],[-1, 1],[1, -1],[-1, -1]] as [number, number][]){
            this.walls.push(new Wall(gl, [BL, BL, BOUNDARY / 6], [x * WSPACE / 2, 0, y * WSPACE / 3], [0,0,0]));
            this.walls.push(new Wall(gl, [BOUNDARY / 6, BL, BL], [x * WSPACE / 3, 0, y * WSPACE / 2], [0,0,0]));

            const temp = BOUNDARY / 4;
            const BO = BL / 4;
            this.add_light_stick(x * WSPACE + -x * BL, y * WSPACE + -y * BL);
            this.add_light_stick(x * (temp + BO), y * (temp + BO));
            this.add_light_stick(x * (temp - BL), y * (temp - BL));
            this.add_light_stick(x * BL, y * BL);
            this.add_light_stick(x * WSPACE + -x * BL, -y * BL);
            this.add_light_stick(x * BL, y * WSPACE + -y * BL);
        }

        this.point_list.push(WSPACE -2, 2, WSPACE -2);
        this.point_list.push(WSPACE -2, 2, WSPACE -2);

        this.spawnEnemies();
        this.set_health_label();

    }

    reset(){
        this.enemies = [];
        this.enbullets = [];
        this.bullets = [];
        this.spawnEnemies();
        this.player.transform = [PLAYERLOC, 2, PLAYERLOC];
        this.player.rotation[1] = Math.PI / 4;
        this.player.health = 5;
        this.set_health_label();
    }

    win(){
        this.enemies = [];
        this.enbullets = [];
        this.health_label.textContent = `You Won!!!! 🏆`;
        this.yetWin = false;
    }

    spawnEnemies(){
        for(let _ = 0; _ < ENEMY_COUNT; _++){
            let x = this.getRandomFloat(-WSPACE, WSPACE);
            let y = this.getRandomFloat(-WSPACE, WSPACE);
            if (x < 0 && y < 0){ // prevent enemies spawn camping the player
                _ -= 1;
            } else{
                this.enemies.push(new BadGuy(this.gl, 3, [x, 0, y], this.add_enobject.bind(this), this.player));
            }
            
        }
    }
    set_health_label(){
        this.health_label.textContent = `Health ${this.player.health}❤️`;
    }

    add_light_stick(x: number, y: number){
        this.point_list.push(x, 3, y);
        this.decor.push(new Torch(this.gl, [0.25, 0.75, 0.25], [x, 0, y], [0,0,0]));
    }

    add_plobject(object: GameObject): void{
        this.bullets.push(object);
    }

    add_enobject(object: GameObject): void{
        this.enbullets.push(object);
    }

    update(timestamp: number): void {
        const deltaTime = Math.min(((timestamp - this.lastTime) / 1000), .1);
        this.lastTime = timestamp;

        this.gl.clearColor(0.498, 0.8, 1, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.player.update(deltaTime);

        this.floor.render(this);


        for (const wall of this.walls) {
            this.player.AABB_colide(wall);
            wall.render(this);

            for(const [index, bullet] of this.bullets.entries()){
                bullet.update(deltaTime);
                bullet.render(this);
                if (bullet.AABB_colide(wall)){
                    this.bullets.splice(index, 1);
                }
            }
            for(const [index, bullet] of this.enbullets.entries()){
                bullet.update(deltaTime);
                bullet.render(this);
                if (bullet.AABB_colide(wall)){
                    this.enbullets.splice(index, 1);
                }
            }
        }
        
        for (const decor of this.decor) {
            decor.render(this);
        }

        for(const [index, bullet] of this.enbullets.entries()){
            bullet.update(deltaTime);
            bullet.render(this);
            if (bullet.point_colide(this.player)){
                if(this.player.collide(bullet)){
                    this.reset();
                };
                this.set_health_label();
                this.enbullets.splice(index, 1);
            }
        }

        for (const [index, enemy] of this.enemies.entries()) {
            if(enemy.AABB_colide(this.player)){
                this.reset();
            }
            for (const wall of this.walls) {
                if(enemy.AABB_colide(wall)){
                    enemy.collide(wall);
                }
            }

            enemy.update(deltaTime);
            enemy.render(this);

            for(const [index2, bullet] of this.bullets.entries()){
                if (bullet.point_colide(enemy)){
                    if(enemy.collide(bullet)){
                        this.enemies.splice(index, 1);
                    }
                    this.bullets.splice(index2, 1);
                }
            }

        }


        const distx = Math.abs(this.player.transform[0] - WSPACE);
        const distz = Math.abs(this.player.transform[2] - WSPACE);
        if(this.yetWin && distx < 3 && distz < 3){
            this.win();
        }

        requestAnimationFrame((ts) => this.update(ts));
    }

    getRandomFloat(min: number = 1.0, max: number = 10.0): number {
        return Math.random() * (max - min) + min;
    }

    randomFlip(value: number = 1): number {
        return Math.random() < 0.5 ? -value : value;
    }

    weightedRandomBool(probability: number = 0.5): boolean {
        return Math.random() < probability;
    };
}