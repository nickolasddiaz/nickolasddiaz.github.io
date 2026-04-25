import {type vec3, GameObjectEnum, GameObject, TAU} from '../GameObject.js';
import {triangleVertices1, triangleVertices2, triangleVertices3, indices} from '../verts/bad_guy.js';
import Bullet from './Bullet.js';
import type Player from './Player.js';


type GuyType = 1 | 2 | 3;
export const Guy = {
    MOVER: 1 as GuyType,
    RANDOM: 2 as GuyType,
    SHOOTER: 3 as GuyType,
} as const;

export default class BadGuy extends GameObject{
    health: number = Math.floor(Math.random() * 2) + 1;;
    guytype: GuyType;
    allowMove: boolean = false;
    nextshot: number = Math.random() * 2 + 2;
    gl: WebGLRenderingContext;
    add_object: (object: GameObject) => void;
    player: Player;
    constructor(gl: WebGLRenderingContext,
        size: number, start_position: vec3, add_object: (object: GameObject) => void, player: Player
    ){
        const guytype: GuyType = (Math.floor(Math.random() * Guy.SHOOTER) + Guy.MOVER) as GuyType;
        let triangleVertices;
        if (guytype == Guy.MOVER){
            triangleVertices = triangleVertices1;
        } else if (guytype == Guy.RANDOM){
            triangleVertices = triangleVertices2;
        } else{
            triangleVertices = triangleVertices3;
        }

        super(gl, [size, size, size], start_position, [0, Math.random() * Math.PI * 2 ,0],
            GameObjectEnum.BADGUY, triangleVertices, indices
        );
        this.gl = gl;
        this.add_object = add_object;
        this.player = player;
        this.guytype = guytype;
    }

    update(deltatime: number): void {
        if (this.guytype != Guy.SHOOTER || this.allowMove){
            this.go_forward(deltatime * 2);
        }
        this.nextshot -= deltatime;
        if(this.nextshot < 0 && this.guytype == Guy.SHOOTER){
            this.shoot();
        }
    }

    shoot(): void{
        this.allowMove = !this.allowMove;
        this.nextshot = Math.random() * 2 + 2;
        const dx = this.player.transform[0] - this.transform[0];
        const dz = this.player.transform[2] - this.transform[2];
        const angle = Math.atan2(dx, dz);
        const bullet = new Bullet(this.gl,
                        .5, [this.transform[0] + Math.cos(this.rotation[2]) / 10, 1.5, this.transform[2]], 
                        [this.rotation[0], angle, this.rotation[2]]
                    );
        bullet.go_forward(2);
        this.add_object(bullet);
    }

    collide(other: GameObject): boolean {
        switch (other.objectType) {
            case GameObjectEnum.BULLET:
                this.health -= 1
                return this.health <= 0;
            case GameObjectEnum.WALL:
                switch(this.guytype){
                    case Guy.RANDOM:
                        this.rotation[1] += Math.PI;
                        this.update(.5);
                    case Guy.SHOOTER:
                    case Guy.MOVER:
                        const randomVal = Math.random() * (Math.PI / 5) - (Math.PI / 6);
                        this.rotation[1] += Math.PI + randomVal;
                        this.update(.5);
                }
                this.rotation[1] %= TAU;                
            default:
                return false;
        }
    }

    render_rotation(): vec3{
        return this.player.rotation;
    }
    
}