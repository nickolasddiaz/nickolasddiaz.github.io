import InitWebGLProgram from './InitWebGLProgram.js';
import { GameObject, TAU } from './GameObject.js';
import Player from './objects/Player.js';
import Tree from './objects/Tree.js';
import Rock from './objects/Rock.js';
import Grass from './objects/GrassFloor.js';
const TREE_ROCK_RATIO = .7;
const OBJECT_COUNT = 400;
export const WSPACE = 80;
const OBJECTSPACE = WSPACE - 5;
const BOUNDARY = WSPACE * 2;
const OBJECT_ROTATION_LOW = .01;
const OBJECT_ROTATION_HIGH = .05;
const TRIES = 1000;
const MAX_SIZE = 2;
const MIN_SIZE = .8;
const NUM_LIGHTS = 20;
async function loadShader(url) {
    const response = await fetch(url);
    return await response.text();
}
export default async function get_main() {
    let FragmentShader = await loadShader('/computer_graphics/The Dark Spooky Forest/shaders/FragmentShader.frag');
    let VertexShader = await loadShader('/computer_graphics/The Dark Spooky Forest/shaders/VertexShader.vert');
    return new Main(VertexShader, FragmentShader);
}
export class Main {
    webGL;
    gl;
    program;
    Scale;
    Rotation;
    Transform;
    CameraPos;
    CameraRot;
    pointLoc;
    spotLoc;
    colorAttLoc;
    positionAttLoc;
    player;
    objects;
    lastTime = 0;
    grass;
    point_list;
    spotAngle = 0;
    spotPos = [0, 100, 0];
    constructor(VertexShader3D, FragmentShader2D) {
        const canvas = document.getElementById("myCanvas");
        canvas.height = window.screen.height / 2;
        canvas.width = window.screen.height / 2;
        this.gl = canvas.getContext("webgl");
        this.webGL = new InitWebGLProgram(this.gl);
        let vertexShader = this.webGL.createShader(this.gl.VERTEX_SHADER, VertexShader3D);
        let fragmentShader = this.webGL.createShader(this.gl.FRAGMENT_SHADER, FragmentShader2D);
        this.program = this.webGL.createProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.program);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.Transform = this.gl.getUniformLocation(this.program, 'trans');
        this.Rotation = this.gl.getUniformLocation(this.program, 'rotate');
        this.Scale = this.gl.getUniformLocation(this.program, 'scale');
        this.CameraPos = this.gl.getUniformLocation(this.program, 'camerapos');
        this.CameraRot = this.gl.getUniformLocation(this.program, 'camerarot');
        this.pointLoc = this.gl.getUniformLocation(this.program, 'pointLoc[0]');
        this.spotLoc = this.gl.getUniformLocation(this.program, 'spotLoc');
        this.colorAttLoc = this.gl.getAttribLocation(this.program, "a_color");
        this.positionAttLoc = this.gl.getAttribLocation(this.program, "a_position");
        this.player = new Player(this.gl, 1, [0, 2, 0]);
        this.grass = new Grass(this.gl, BOUNDARY + 3, [0, 0, 0]);
        this.objects = [];
        const xSet = new Set();
        const zSet = new Set();
        let x_space, z_space = 0;
        let x_temp, z_temp = 0;
        let rotation = 0;
        let tries = 0;
        let size = 0;
        let temp_obj;
        for (let i = 0; i < OBJECT_COUNT; i++) {
            do {
                tries += 1;
                x_space = this.getRandomFloat(-OBJECTSPACE, OBJECTSPACE);
                z_space = this.getRandomFloat(-OBJECTSPACE, OBJECTSPACE);
                x_temp = Math.round(x_space / (MAX_SIZE + 1));
                z_temp = Math.round(z_space / (MAX_SIZE + 1));
            } while (tries < TRIES && xSet.has(x_temp) && zSet.has(z_temp));
            xSet.add(x_temp);
            zSet.add(z_temp);
            rotation = this.randomFlip(this.getRandomFloat(OBJECT_ROTATION_LOW, OBJECT_ROTATION_HIGH));
            size = this.getRandomFloat(MIN_SIZE, MAX_SIZE);
            if (this.weightedRandomBool(TREE_ROCK_RATIO)) {
                temp_obj = new Tree(this.gl, size, [x_space, 0, z_space], [0, rotation, 0]);
            }
            else {
                temp_obj = new Rock(this.gl, size, [x_space, .1, z_space], [0, 0, rotation]);
            }
            this.objects.push(temp_obj);
        }
        this.point_list = Array.from({ length: NUM_LIGHTS * 3 }, (_, i) => {
            const axis = i % 3;
            if (axis === 1) {
                return 0.5;
            }
            return this.getRandomFloat(-OBJECTSPACE, OBJECTSPACE);
        });
    }
    update(timestamp) {
        const deltaTime = Math.min(((timestamp - this.lastTime) / 1000), .1);
        this.lastTime = timestamp;
        this.spotAngle += deltaTime;
        this.spotAngle %= TAU;
        this.spotPos[0] = Math.cos(this.spotAngle) * 20;
        this.spotPos[2] = Math.sin(this.spotAngle) * 20;
        const distx = this.spotPos[0] - this.player.transform[0];
        const distz = this.spotPos[2] - this.player.transform[2];
        const dist_dot = distx * distx + distz * distz;
        if (dist_dot <= 20) {
            this.player.transform[0] = 0;
            this.player.transform[2] = 0;
        }
        this.gl.clearColor(0.45, 0.55, 0.5, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.player.update(deltaTime);
        for (const aster of this.objects) {
            this.player.collided(aster);
        }
        for (const shape of this.objects) {
            shape.update(deltaTime / 4);
            shape.render(this);
        }
        this.grass.render(this);
        requestAnimationFrame((ts) => this.update(ts));
    }
    getRandomFloat(min = 1.0, max = 10.0) {
        return Math.random() * (max - min) + min;
    }
    randomFlip(value = 1) {
        return Math.random() < 0.5 ? -value : value;
    }
    weightedRandomBool(probability = 0.5) {
        return Math.random() < probability;
    }
    ;
}
