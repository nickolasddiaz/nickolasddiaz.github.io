import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/floor.js';
export default class Floor extends GameObject {
    constructor(gl, size, start_position) {
        super(gl, [size, size, size], start_position, [0, 0, 0], GameObjectEnum.FLOOR, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
