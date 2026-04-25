import {type vec3, GameObjectEnum, GameObject, TAU} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/enemy.js';

export default class Enemy extends GameObject{
    enemy_count: () => void;
    constructor(gl: WebGLRenderingContext, program: WebGLProgram,
        mScale: WebGLUniformLocation , mRotation: WebGLUniformLocation , mTransform: WebGLUniformLocation,
        size: vec3, start_position: vec3, enemy_count: () => void,
    ){
        super(gl, program, size, start_position, [.2, .2, Math.random() * TAU],
            GameObjectEnum.ENEMY, mScale, mRotation, mTransform, 
            triangleVertices, indices, 
        );

        this.enemy_count = enemy_count;
    }

    update(deltatime: number): void {
        // Go straight in it's direction
        this.transform[0] += Math.cos(this.rotation[2]) * deltatime * 2;
        this.transform[1] += Math.sin(this.rotation[2]) * deltatime * 2;

    }

    collide(otherObject: GameObject): boolean {
        switch (otherObject.objectType) {
            case GameObjectEnum.BULLET:
                this.enemy_count();
                return true; // dead
            case GameObjectEnum.WALL:
                const randomVal = Math.random() * (Math.PI / 3) - (Math.PI / 6);
                this.rotation[2] += Math.PI + randomVal;
                this.update(.01);
            default:
                return false;
        }
    }
    
}