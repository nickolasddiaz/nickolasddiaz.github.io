import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/rock.js';

export default class Rock extends GameObject{
    constructor(gl: WebGLRenderingContext,
        size: number, start_position: vec3, rotation: vec3
    ){
        super(gl, size, start_position, rotation,
            GameObjectEnum.ROCK, triangleVertices, indices
        );
    }

    update(_deltatime: number): void {
    }

    collide(_otherObject: GameObject): boolean {
        return false
    }
    
}