import {type vec3, GameObjectEnum, GameObject, TAU} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/player.js';
import Bullet from './Bullet.js'


export default class Player extends GameObject{
    moving: boolean;
    backwards: number;
    keysPressed: Record<string, boolean> = {
        'a': false,
        'w': false,
        's': false,
        'd': false,
        'z': false,
        'x': false,
        ' ': false,
    };
    add_object: (object: GameObject) => void;
    bullet_cooldown: boolean;
    gl: WebGLRenderingContext;

    constructor(gl: WebGLRenderingContext, size: number, start_position: vec3,
        add_object: (object: GameObject) => void,
    ){
        super(gl, size, start_position, [0, 0, 0],
            GameObjectEnum.PLAYER, triangleVertices, indices
        );
        this.gl = gl;
        this.moving = false;
        this.backwards = 1;
        this.add_object = add_object;
        this.bullet_cooldown = true;

        document.addEventListener('keydown', (this.update_keys.bind(this, true)));
        document.addEventListener('keyup', (this.update_keys.bind(this, false)));
    }

    update_keys(activate: boolean, event: KeyboardEvent){
        if (event.key in this.keysPressed){
            event.preventDefault();
            this.keysPressed[event.key] = activate
        }
    }

    update(deltatime: number): void {
        if (this.bullet_cooldown && this.keysPressed[' ']){
            const bullet = new Bullet(this.gl,
                1, [this.transform[0] + Math.cos(this.rotation[2]) / 10, (this.transform[1] + Math.sin(this.rotation[2]) / 10) - 1.5, this.transform[2]], 
                [this.rotation[0], this.rotation[1], this.rotation[2]]
            );
            bullet.go_forward(5);
            this.add_object(bullet);
            this.keysPressed[" "] = false;
            this.bullet_cooldown = false;
            setTimeout(() => {
                this.bullet_cooldown = true;
            }, 1000);
        } 

        deltatime *= 20;


        this.moving = (this.keysPressed['w'] || this.keysPressed['s']) as boolean;

        if (this.keysPressed['w']){
            this.backwards = -1;
        } 
        if(this.keysPressed['s']){
            this.backwards = 1;
        } 
        if(this.keysPressed['a']){
            this.rotation[1] -= deltatime / 2;
            this.rotation[1] %= TAU;
        } 
        if(this.keysPressed['d']){
            this.rotation[1] += deltatime / 2;
            this.rotation[1] %= TAU;
        }
        if(this.keysPressed['z']){
            this.transform[1] += deltatime;
        }
        if(this.keysPressed['x']){
            this.transform[1] -= deltatime;
        }

        if (this.moving){
            const speed = deltatime * -this.backwards; // w = forward, s = backward
            this.go_forward(speed);
        }
    }

    collide(other: GameObject): boolean {
        return false
    }
    
}