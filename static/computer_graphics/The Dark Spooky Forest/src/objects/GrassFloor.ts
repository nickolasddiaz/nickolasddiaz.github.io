import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/grass_floor.js';

export default class GrassFloor extends GameObject{
    constructor(gl: WebGLRenderingContext,
        size: number, start_position: vec3
    ){
        super(gl, size, start_position, [0,0,0],
            GameObjectEnum.GRASS, triangleVertices, indices
        );
    }

    update(_deltatime: number): void {
    }

    collide(_otherObject: GameObject): boolean {
        return false;
    }
    
}