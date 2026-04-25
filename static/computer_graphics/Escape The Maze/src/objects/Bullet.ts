import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/bullet.js';

export default class Bullet extends GameObject{
    constructor(gl: WebGLRenderingContext,
            size: number, start_position: vec3, rotation: vec3
    ){
        super(gl, [size, size, size], start_position, rotation,
                GameObjectEnum.BULLET, triangleVertices, indices
        );
    }

    update(deltatime: number): void {
        this.go_forward(deltatime);
    }

    collide(otherObject: GameObject): boolean {
        return (otherObject.objectType == GameObjectEnum.WALL)
    }
    
}