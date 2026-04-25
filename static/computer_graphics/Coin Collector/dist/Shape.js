import { indices, triangleVertices } from './verts/wall.js';
export default class Shape {
    time;
    rotate;
    transform;
    scale;
    movement;
    rotationstate;
    indexSize;
    positionBuffer;
    gl;
    indexBuffer;
    constructor(rotate, transform, scale, movement, gl) {
        this.gl = gl;
        this.time = 0;
        this.rotate = rotate;
        this.transform = transform;
        this.scale = scale;
        this.movement = movement;
        this.rotationstate = [0, 0, 0];
        this.indexSize = indices.length;
        this.positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    }
    render(program, deltaTime, mScale, mRotation, mTransform) {
        deltaTime %= (2 * Math.PI);
        this.transform[0] += (this.movement[0] * deltaTime);
        this.transform[1] += (this.movement[1] * deltaTime);
        this.transform[2] += (this.movement[2] * deltaTime);
        this.rotationstate[0] += this.rotate[0] * deltaTime;
        this.rotationstate[1] += this.rotate[1] * deltaTime;
        this.rotationstate[2] += this.rotate[2] * deltaTime;
        const scale = [this.scale[0], this.scale[1], this.scale[2]];
        const rotation = [this.rotationstate[0], this.rotationstate[1], this.rotationstate[2]];
        const transform = [this.transform[0], this.transform[1], this.transform[2]];
        this.gl.uniform3fv(mScale, scale);
        this.gl.uniform3fv(mRotation, rotation);
        this.gl.uniform3fv(mTransform, transform);
        const positionAttributeLocation = this.gl.getAttribLocation(program, "a_position");
        this.gl.enableVertexAttribArray(positionAttributeLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.vertexAttribPointer(positionAttributeLocation, 3, this.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
        const colorAttributeLocation = this.gl.getAttribLocation(program, "a_color");
        this.gl.enableVertexAttribArray(colorAttributeLocation);
        this.gl.vertexAttribPointer(colorAttributeLocation, 3, this.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        this.gl.drawElements(this.gl.TRIANGLES, this.indexSize, this.gl.UNSIGNED_SHORT, 0);
    }
}
