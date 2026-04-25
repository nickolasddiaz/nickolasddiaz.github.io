import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/coin.js';
export default class Coin extends GameObject {
    add_coin;
    constructor(gl, program, mScale, mRotation, mTransform, size, start_position, rotate, add_coin) {
        super(gl, program, size, start_position, rotate, GameObjectEnum.COIN, mScale, mRotation, mTransform, triangleVertices, indices);
        this.add_coin = add_coin;
    }
    update(deltatime) {
        // rotate in the Y direction
        this.rotation[1] += deltatime * 10;
        this.rotation[1] %= TAU;
    }
    collide(otherObject) {
        if (otherObject.objectType == GameObjectEnum.PLAYER) {
            this.add_coin();
            return true;
        }
        return false;
    }
}
