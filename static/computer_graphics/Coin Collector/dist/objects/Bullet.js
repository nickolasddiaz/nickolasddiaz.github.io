import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/bullet.js';
export default class Bullet extends GameObject {
    constructor(gl, program, mScale, mRotation, mTransform, size, start_position, rotate) {
        super(gl, program, size, start_position, rotate, GameObjectEnum.BULLET, mScale, mRotation, mTransform, triangleVertices, indices);
    }
    update(deltatime) {
        // Go straight in it's direction
        this.transform[0] += Math.cos(this.rotation[2]) * deltatime * 2;
        this.transform[1] += Math.sin(this.rotation[2]) * deltatime * 2;
    }
    collide(otherObject) {
        return (otherObject.objectType == GameObjectEnum.WALL);
    }
}
