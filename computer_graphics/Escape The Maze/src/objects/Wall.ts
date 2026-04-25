import {type vec3, GameObjectEnum, GameObject} from '../GameObject.js';
import {triangleVertices1, triangleVertices2, indices} from '../verts/wall.js';

export default class Wall extends GameObject{
    constructor(gl: WebGLRenderingContext,
        size: vec3, start_position: vec3, rotation: vec3, isStone = false
    ){
        let triangleVertices;
        if (isStone){
            triangleVertices = triangleVertices1;
        } else {
            triangleVertices = triangleVertices2;
        }
        super(gl, size, start_position, rotation,
            GameObjectEnum.WALL, triangleVertices, indices
        );
    }

    update(_deltatime: number): void {
    }

    collide(_otherObject: GameObject): boolean {
        return false
    }
    
}