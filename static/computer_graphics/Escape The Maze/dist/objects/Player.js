import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/bullet.js';
import Bullet from './Bullet.js';
export default class Player extends GameObject {
    moving = false;
    health = 5;
    ;
    backwards = 1;
    keysPressed = {
        'a': false,
        'w': false,
        's': false,
        'd': false,
        ' ': false,
    };
    add_object;
    gl;
    bullet_cooldown = true;
    constructor(gl, size, start_position, rotation, add_object) {
        super(gl, [size, size, size], start_position, rotation, GameObjectEnum.PLAYER, triangleVertices, indices);
        this.gl = gl;
        document.addEventListener('keydown', (this.update_keys.bind(this, true)));
        document.addEventListener('keyup', (this.update_keys.bind(this, false)));
        this.add_object = add_object;
    }
    update_keys(activate, event) {
        if (event.key.toLowerCase() in this.keysPressed) {
            event.preventDefault();
            this.keysPressed[event.key.toLowerCase()] = activate;
        }
    }
    update(deltatime) {
        if (this.bullet_cooldown && this.keysPressed[' ']) {
            const bullet = new Bullet(this.gl, .5, [this.transform[0] + Math.cos(this.rotation[2]) / 10, 1.5, this.transform[2]], [this.rotation[0], this.rotation[1], this.rotation[2]]);
            bullet.go_forward(2);
            this.add_object(bullet);
            this.keysPressed[" "] = false;
            this.bullet_cooldown = false;
            setTimeout(() => {
                this.bullet_cooldown = true;
            }, 1000);
        }
        deltatime *= 10;
        this.moving = (this.keysPressed['w'] || this.keysPressed['s']);
        if (this.keysPressed['w']) {
            this.backwards = -1;
        }
        if (this.keysPressed['s']) {
            this.backwards = 1;
        }
        if (this.keysPressed['a']) {
            this.rotation[1] -= deltatime / 4;
            this.rotation[1] %= TAU;
        }
        if (this.keysPressed['d']) {
            this.rotation[1] += deltatime / 4;
            this.rotation[1] %= TAU;
        }
        if (this.moving) {
            const speed = deltatime * -this.backwards; // w = forward, s = backward
            this.go_forward(speed);
        }
    }
    collide(other) {
        switch (other.objectType) {
            case GameObjectEnum.BULLET:
                this.health -= 1;
                return this.health <= 0;
            default:
                return false;
        }
    }
}
