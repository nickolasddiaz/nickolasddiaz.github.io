import { GameObjectEnum, GameObject, TAU } from '../GameObject.js';
import { triangleVertices1, triangleVertices2, triangleVertices3, indices } from '../verts/bad_guy.js';
import Bullet from './Bullet.js';
export const Guy = {
    MOVER: 1,
    RANDOM: 2,
    SHOOTER: 3,
};
export default class BadGuy extends GameObject {
    health = Math.floor(Math.random() * 2) + 1;
    ;
    guytype;
    allowMove = false;
    nextshot = Math.random() * 2 + 2;
    gl;
    add_object;
    player;
    constructor(gl, size, start_position, add_object, player) {
        const guytype = (Math.floor(Math.random() * Guy.SHOOTER) + Guy.MOVER);
        let triangleVertices;
        if (guytype == Guy.MOVER) {
            triangleVertices = triangleVertices1;
        }
        else if (guytype == Guy.RANDOM) {
            triangleVertices = triangleVertices2;
        }
        else {
            triangleVertices = triangleVertices3;
        }
        super(gl, [size, size, size], start_position, [0, Math.random() * Math.PI * 2, 0], GameObjectEnum.BADGUY, triangleVertices, indices);
        this.gl = gl;
        this.add_object = add_object;
        this.player = player;
        this.guytype = guytype;
    }
    update(deltatime) {
        if (this.guytype != Guy.SHOOTER || this.allowMove) {
            this.go_forward(deltatime * 2);
        }
        this.nextshot -= deltatime;
        if (this.nextshot < 0 && this.guytype == Guy.SHOOTER) {
            this.shoot();
        }
    }
    shoot() {
        this.allowMove = !this.allowMove;
        this.nextshot = Math.random() * 2 + 2;
        const dx = this.player.transform[0] - this.transform[0];
        const dz = this.player.transform[2] - this.transform[2];
        const angle = Math.atan2(dx, dz);
        const bullet = new Bullet(this.gl, .5, [this.transform[0] + Math.cos(this.rotation[2]) / 10, 1.5, this.transform[2]], [this.rotation[0], angle, this.rotation[2]]);
        bullet.go_forward(2);
        this.add_object(bullet);
    }
    collide(other) {
        switch (other.objectType) {
            case GameObjectEnum.BULLET:
                this.health -= 1;
                return this.health <= 0;
            case GameObjectEnum.WALL:
                switch (this.guytype) {
                    case Guy.RANDOM:
                        this.rotation[1] += Math.PI;
                        this.update(.5);
                    case Guy.SHOOTER:
                    case Guy.MOVER:
                        const randomVal = Math.random() * (Math.PI / 5) - (Math.PI / 6);
                        this.rotation[1] += Math.PI + randomVal;
                        this.update(.5);
                }
                this.rotation[1] %= TAU;
            default:
                return false;
        }
    }
    render_rotation() {
        return this.player.rotation;
    }
}
