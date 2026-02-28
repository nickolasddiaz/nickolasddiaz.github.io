import ShapeCreator from "./ShapeCreator.js";
const NUM_VERTICIES = 30; // 12 vertices
const RAD_DEGRE = (Math.PI / 180);
export default class Circle extends ShapeCreator {
    prev_x = 0;
    prev_y = 0;
    prev = true;
    constructor(gl, isFill) {
        super(gl, isFill);
    }
    add_vertice(x, y, color) {
        if (this.prev) {
            this.prev_x = x;
            this.prev_y = y;
            this.prev = false;
            this.prev_verticiesamount = 1;
        }
        else {
            const aspect = this.gl.canvas.width / this.gl.canvas.height;
            const distance = Math.sqrt(Math.pow((x - this.prev_x) * aspect, 2) + Math.pow(y - this.prev_y, 2));
            for (let i = 0; i <= 360; i += NUM_VERTICIES) {
                this.triangleVertices.push(this.prev_x + (Math.cos(i * RAD_DEGRE) * distance) / aspect, this.prev_y + Math.sin(i * RAD_DEGRE) * distance, color[0], color[1], color[2]);
            }
            this.prev_verticiesamount = (360 / NUM_VERTICIES) + 1;
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.triangleVertices), this.gl.STATIC_DRAW);
        return this.get_length() != 0;
    }
    render(positionAttributeLocation, colorAttributeLocation) {
        this.gl.enableVertexAttribArray(positionAttributeLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.vertexAttribPointer(positionAttributeLocation, // Attribute location
        2, // Number of elements per attribute
        this.gl.FLOAT, // Type of elements
        false, 5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        0 // Offset from the beginning of a single vertex to this attribute
        );
        this.gl.enableVertexAttribArray(colorAttributeLocation);
        this.gl.vertexAttribPointer(colorAttributeLocation, // Attribute location
        3, // Number of elements per attribute
        this.gl.FLOAT, // Type of elements
        false, 5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
        );
        let primitiveType = this.gl.TRIANGLE_FAN;
        if (this.get_length() <= 2 || this.isLine) {
            primitiveType = this.gl.LINE_LOOP;
        }
        this.gl.drawArrays(primitiveType, 0, this.get_length());
    }
}
