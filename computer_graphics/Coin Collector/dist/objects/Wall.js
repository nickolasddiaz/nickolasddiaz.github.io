import { GameObjectEnum, GameObject } from '../GameObject.js';
import { triangleVertices, indices } from '../verts/wall.js';
export default class Wall extends GameObject {
    verticle;
    constructor(gl, program, mScale, mRotation, mTransform, size, start_position, rotate, verticle) {
        super(gl, program, size, start_position, rotate, GameObjectEnum.WALL, mScale, mRotation, mTransform, triangleVertices, indices);
        this.verticle = verticle;
    }
    update(deltatime) {
        // Does nothing
    }
    colide(otherObject) {
        // Does nothing
        return false;
    }
    collided(other) {
        if (this.verticle) {
            console.log("test");
            return (this.transform[0] - this.scale[0] < other.transform[0] + other.scale[0] &&
                this.transform[0] + this.scale[0] > other.transform[0] - other.scale[0] &&
                this.transform[1] - this.scale[1] < other.transform[1] + other.scale[1] &&
                this.transform[1] + this.scale[1] > other.transform[1] - other.scale[1]);
        }
        else {
            return (this.transform[0] - this.scale[0] < other.transform[0] + other.scale[0] &&
                this.transform[0] + this.scale[0] > other.transform[0] - other.scale[0] &&
                this.transform[1] - this.scale[1] < other.transform[1] + other.scale[1] &&
                this.transform[1] + this.scale[1] > other.transform[1] - other.scale[1]);
        }
    }
}
