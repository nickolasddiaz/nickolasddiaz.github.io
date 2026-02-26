import {} from './Main.js';
export default class ShapeCreator {
    gl;
    positionBuffer;
    triangleVertices;
    isLine;
    prev_verticiesamount = 0;
    constructor(gl, isFill) {
        this.gl = gl;
        this.isLine = isFill;
        this.triangleVertices = [];
        this.positionBuffer = gl.createBuffer();
    }
    get_length() {
        return this.triangleVertices.length / 5;
    }
    pop_prev_verticies() {
        this.triangleVertices.length -= this.prev_verticiesamount * 5;
    }
}
