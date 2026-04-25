import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/bullet.js';
export default class Bullet extends GameObject {
    constructor(gl, size, start_position, rotate) {
        super(gl, size, start_position, rotate, GameObjectEnum.BULLET, triangleVertices, indices);
    }
    update(deltatime) {
        const speed = deltatime * 20;
        this.go_forward(speed);
    }
    collide(otherObject) {
        return (otherObject.objectType == GameObjectEnum.ASTEROID);
    }
}
