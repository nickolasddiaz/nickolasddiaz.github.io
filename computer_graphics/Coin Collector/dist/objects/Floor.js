import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/floor.js';
export default class Enemy extends GameObject {
    constructor(gl, program, mScale, mRotation, mTransform) {
        super(gl, program, [1, 1, 1], [0, 0, 0], [0, 0, 0], GameObjectEnum.WALL, mScale, mRotation, mTransform, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
