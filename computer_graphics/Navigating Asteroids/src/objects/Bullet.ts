import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/bullet.js';


export default class Bullet extends GameObject{
    constructor(gl: WebGLRenderingContext, 
        size: number, start_position: vec3, rotate: vec3,
    ){
        super(gl, size, start_position, rotate,
            GameObjectEnum.BULLET, triangleVertices, indices
        );
    }

    update(deltatime: number): void {
        const speed = deltatime * 20;
        this.go_forward(speed);
    }

    collide(otherObject: GameObject): boolean {
        return (otherObject.objectType == GameObjectEnum.ASTEROID)
    }
    
}