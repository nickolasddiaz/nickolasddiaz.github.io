import {type vec3, GameObjectEnum, GameObject, TAU} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/asteroid.js';

export default class Asteroid extends GameObject{
    rotate: vec3;
    health: number;
    constructor(gl: WebGLRenderingContext,
        size: number, start_position: vec3, rotate: vec3,
    ){
        super(gl, size, start_position, [0,0,0],
            GameObjectEnum.ASTEROID, triangleVertices, indices
        );
        this.rotate = rotate;
        this.health = 3;
    }

    update(deltatime: number): void {
        deltatime *= 20;
        this.rotation[0] += this.rotate[0] * deltatime;
        this.rotation[1] += this.rotate[1] * deltatime;
        this.rotation[2] += this.rotate[2] * deltatime;

        this.rotation[0] %= TAU;
        this.rotation[1] %= TAU;
        this.rotation[2] %= TAU;
    }

    collide(otherObject: GameObject): boolean {
        switch(otherObject.objectType){
            case (GameObjectEnum.BULLET): {
                this.health -= 1;
                return this.health <= 0;
            }
            default:{
                return false;
            }
        }
    }
    
}