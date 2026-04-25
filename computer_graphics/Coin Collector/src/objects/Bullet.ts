import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/bullet.js';

export default class Bullet extends GameObject{
    constructor(gl: WebGLRenderingContext, program: WebGLProgram,
        mScale: WebGLUniformLocation , mRotation: WebGLUniformLocation , mTransform: WebGLUniformLocation,
        size: vec3, start_position: vec3, rotate: vec3,
    ){
        super(gl, program, size, start_position, rotate,
            GameObjectEnum.BULLET, mScale, mRotation, mTransform,
            triangleVertices, indices
        );
    }

    update(deltatime: number): void {
        // Go straight in it's direction
        this.transform[0] += Math.cos(this.rotation[2]) * deltatime * 2;
        this.transform[1] += Math.sin(this.rotation[2]) * deltatime * 2;

    }

    collide(otherObject: GameObject): boolean {
        return (otherObject.objectType == GameObjectEnum.WALL)
    }
    
}