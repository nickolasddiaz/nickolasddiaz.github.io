import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/asteroid.js';
export default class Asteroid extends GameObject {
    rotate;
    health;
    constructor(gl, size, start_position, rotate) {
        super(gl, size, start_position, [0, 0, 0], GameObjectEnum.ASTEROID, triangleVertices, indices);
        this.rotate = rotate;
        this.health = 3;
    }
    update(deltatime) {
        deltatime *= 20;
        this.rotation[0] += this.rotate[0] * deltatime;
        this.rotation[1] += this.rotate[1] * deltatime;
        this.rotation[2] += this.rotate[2] * deltatime;
        this.rotation[0] %= TAU;
        this.rotation[1] %= TAU;
        this.rotation[2] %= TAU;
    }
    collide(otherObject) {
        switch (otherObject.objectType) {
            case (GameObjectEnum.BULLET): {
                this.health -= 1;
                return this.health <= 0;
            }
            default: {
                return false;
            }
        }
    }
}
