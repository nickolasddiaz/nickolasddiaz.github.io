import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/rock.js';
export default class Rock extends GameObject {
    constructor(gl, size, start_position, rotation) {
        super(gl, size, start_position, rotation, GameObjectEnum.ROCK, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
