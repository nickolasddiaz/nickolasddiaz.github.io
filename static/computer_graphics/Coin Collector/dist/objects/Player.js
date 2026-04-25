import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/player.js';
import Bullet from './Bullet.js';
export default class Player extends GameObject {
    moving;
    backwards;
    keysPressed = {
        'a': false,
        'w': false,
        's': false,
        'd': false,
        ' ': false,
    };
    add_object;
    bullet_cooldown;
    loose;
    constructor(gl, program, mScale, mRotation, mTransform, size, start_position, add_object, loose) {
        super(gl, program, size, start_position, [.2, .2, Math.random() * TAU], GameObjectEnum.PLAYER, mScale, mRotation, mTransform, triangleVertices, indices);
        this.moving = false;
        this.backwards = 1;
        this.add_object = add_object;
        this.bullet_cooldown = true;
        this.loose = loose;
        document.addEventListener('keydown', (this.update_keys.bind(this, true)));
        document.addEventListener('keyup', (this.update_keys.bind(this, false)));
    }
    update_keys(activate, event) {
        if (event.key in this.keysPressed) {
            event.preventDefault();
            this.keysPressed[event.key] = activate;
        }
    }
    update(deltatime) {
        if (this.bullet_cooldown && this.keysPressed[' ']) {
            const bullet = new Bullet(this.gl, this.program, this.mScale, this.mRotation, this.mTransform, [.025, .025, .025], [this.transform[0] + Math.cos(this.rotation[2]) / 10, this.transform[1] + Math.sin(this.rotation[2]) / 10, this.transform[2]], [this.rotation[0], this.rotation[1], this.rotation[2]]);
            this.add_object(bullet);
            this.keysPressed[" "] = false;
            this.bullet_cooldown = false;
            setTimeout(() => {
                this.bullet_cooldown = true;
            }, 1000);
        }
        this.moving = (this.keysPressed['w'] || this.keysPressed['s']);
        if (this.keysPressed['w']) {
            this.backwards = 1;
        }
        if (this.keysPressed['s']) {
            this.backwards = -1;
        }
        if (this.keysPressed['a']) {
            this.rotation[2] += deltatime * 15;
            this.rotation[2] %= TAU;
        }
        if (this.keysPressed['d']) {
            this.rotation[2] -= deltatime * 15;
            this.rotation[2] %= TAU;
        }
        if (this.moving) {
            this.transform[0] += Math.cos(this.rotation[2]) * deltatime * this.backwards;
            this.transform[1] += Math.sin(this.rotation[2]) * deltatime * this.backwards;
        }
    }
    collide(other) {
        switch (other.objectType) {
            case GameObjectEnum.ENEMY:
                this.loose();
                return true; // dead
            case GameObjectEnum.WALL:
                const right = this.transform[0] >= other.transform[0] + other.scale[0];
                const left = this.transform[0] <= other.transform[0] - other.scale[0];
                const top = this.transform[1] >= other.transform[1] + other.scale[1];
                const bottom = this.transform[1] <= other.transform[1] - other.scale[1];
                console.log(right, left, top, bottom);
                if (top) {
                    this.transform[1] = other.transform[1] + other.scale[1] + this.scale[1];
                }
                else if (bottom) {
                    this.transform[1] = other.transform[1] - other.scale[1] - this.scale[1];
                }
                else if (left) {
                    this.transform[0] = other.transform[0] - other.scale[0] - this.scale[0];
                }
                else if (right) {
                    this.transform[0] = other.transform[0] + other.scale[0] + this.scale[0];
                }
            default:
                return false;
        }
    }
}
