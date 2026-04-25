import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/hori_wall.js';

export default class HoriWall extends GameObject{
    constructor(gl: WebGLRenderingContext, program: WebGLProgram,
        mScale: WebGLUniformLocation , mRotation: WebGLUniformLocation , mTransform: WebGLUniformLocation,
        size: vec3, start_position: vec3, rotate: vec3
    ){
        super(gl, program, size, start_position, rotate,
            GameObjectEnum.WALL, mScale, mRotation, mTransform,
            triangleVertices, indices
        );

    }

    update(deltatime: number): void {
        // Does nothing
    }
    collide(otherObject: GameObject): boolean {
        // Does nothing
        return false
    }
}