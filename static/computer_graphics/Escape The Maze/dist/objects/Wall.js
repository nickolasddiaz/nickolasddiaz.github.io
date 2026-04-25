import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices1, triangleVertices2, indices } from '../verts/wall.js';
export default class Wall extends GameObject {
    constructor(gl, size, start_position, rotation, isStone = false) {
        let triangleVertices;
        if (isStone) {
            triangleVertices = triangleVertices1;
        }
        else {
            triangleVertices = triangleVertices2;
        }
        super(gl, size, start_position, rotation, GameObjectEnum.WALL, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
