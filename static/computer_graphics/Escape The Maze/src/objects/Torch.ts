import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/torch.js';

export default class Torch extends GameObject{
    constructor(gl: WebGLRenderingContext,
        size: vec3, start_position: vec3, rotation: vec3
    ){
        super(gl, size, start_position, rotation,
            GameObjectEnum.TORCH, triangleVertices, indices
        );
    }

    update(_deltatime: number): void {
    }

    collide(_otherObject: GameObject): boolean {
        return false
    }
    
}