import ShapeCreator from "./ShapeCreator.js";
export default class Triangle extends ShapeCreator {
    constructor(gl, isFill) {
        super(gl, isFill);
    }
    add_vertice(x, y, color) {
        this.triangleVertices.push(x, y, color[0], color[1], color[2]);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.triangleVertices), this.gl.STATIC_DRAW);
        this.prev_verticiesamount = 1;
        return this.get_length() == 3;
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
        let primitiveType = this.gl.TRIANGLES;
        if (this.get_length() <= 2 || this.isLine) {
            primitiveType = this.gl.LINE_LOOP;
        }
        this.gl.drawArrays(primitiveType, 0, this.get_length());
    }
}
