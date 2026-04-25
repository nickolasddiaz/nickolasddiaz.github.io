import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/bullet.js';
export default class Bullet extends GameObject {
    constructor(gl, size, start_position, rotation) {
        super(gl, [size, size, size], start_position, rotation, GameObjectEnum.BULLET, triangleVertices, indices);
    }
    update(deltatime) {
        this.go_forward(deltatime);
    }
    collide(otherObject) {
        return (otherObject.objectType == GameObjectEnum.WALL);
    }
}
