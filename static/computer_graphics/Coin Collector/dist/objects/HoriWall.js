import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/hori_wall.js';
export default class HoriWall extends GameObject {
    constructor(gl, program, mScale, mRotation, mTransform, size, start_position, rotate) {
        super(gl, program, size, start_position, rotate, GameObjectEnum.WALL, mScale, mRotation, mTransform, triangleVertices, indices);
    }
    update(deltatime) {
        // Does nothing
    }
    collide(otherObject) {
        // Does nothing
        return false;
    }
}
