import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/torch.js';
export default class Torch extends GameObject {
    constructor(gl, size, start_position, rotation) {
        super(gl, size, start_position, rotation, GameObjectEnum.TORCH, triangleVertices, indices);
    }
    update(_deltatime) {
    }
    collide(_otherObject) {
        return false;
    }
}
