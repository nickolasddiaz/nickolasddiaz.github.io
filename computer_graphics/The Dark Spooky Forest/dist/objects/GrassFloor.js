import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/grass_floor.js';
export default class GrassFloor extends GameObject {
    constructor(gl, size, start_position) {
        super(gl, size, start_position, [0, 0, 0], GameObjectEnum.GRASS, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
