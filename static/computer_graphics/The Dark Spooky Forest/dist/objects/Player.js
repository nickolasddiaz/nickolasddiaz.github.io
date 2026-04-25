import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/rock.js';
import { WSPACE } from '../Main.js';
export default class Player extends GameObject {
    moving;
    backwards;
    keysPressed = {
        'a': false,
        'w': false,
        's': false,
        'd': false,
    };
    gl;
    constructor(gl, size, start_position) {
        super(gl, size, start_position, [0, 0, 0], GameObjectEnum.PLAYER, triangleVertices, indices);
        this.gl = gl;
        this.moving = false;
        this.backwards = 1;
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
            this.boundary();
        }
    }
    boundary() {
        if (this.transform[0] > WSPACE) {
            this.transform[0] = WSPACE;
        }
        else if (this.transform[0] < -WSPACE) {
            this.transform[0] = -WSPACE;
        }
        if (this.transform[2] > WSPACE) {
            this.transform[2] = WSPACE;
        }
        else if (this.transform[2] < -WSPACE) {
            this.transform[2] = -WSPACE;
        }
    }
    collide(_other) {
        return false;
    }
}
