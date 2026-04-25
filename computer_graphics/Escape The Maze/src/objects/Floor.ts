import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/floor.js';

export default class Floor extends GameObject{
    constructor(gl: WebGLRenderingContext,
        size: number, start_position: vec3
    ){
        super(gl, [size, size, size], start_position, [0,0,0],
            GameObjectEnum.FLOOR, triangleVertices, indices
        );
    }

    update(_deltatime: number): void {
    }

    collide(_otherObject: GameObject): boolean {
        return false;
    }
    
}