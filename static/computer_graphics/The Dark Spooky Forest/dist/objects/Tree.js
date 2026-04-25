import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/tree.js';
export default class Tree extends GameObject {
    constructor(gl, size, start_position, rotation) {
        super(gl, size, start_position, rotation, GameObjectEnum.TREE, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
