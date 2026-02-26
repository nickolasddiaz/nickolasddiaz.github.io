import type { color } from "./Main.js";
import ShapeCreator from "./ShapeCreator.js";

export default class Square extends ShapeCreator{
    prev_x: number;
    prev_y: number;
    constructor(gl: WebGLRenderingContext, isFill: boolean){
        super(gl, isFill);
        this.prev_x = 0
        this.prev_y = 0
    }

    add_vertice(x: number, y: number, color: color): boolean{
        if (this.get_length() == 0){
            this.prev_x = x;
            this.prev_y = y;
            this.triangleVertices.push(x, y, color[0], color[1], color[2]);
            this.prev_verticiesamount = 1;

        } else {
            this.triangleVertices.push(x, this.prev_y, color[0], color[1], color[2]);
            this.triangleVertices.push(x, y, color[0], color[1], color[2]);
            this.triangleVertices.push(this.prev_x, y, color[0], color[1], color[2]);

            this.prev_verticiesamount = 3;
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.triangleVertices), this.gl.STATIC_DRAW);

        return this.get_length() != 1
    }

    render(positionAttributeLocation: number, colorAttributeLocation: number): void {
        this.gl.enableVertexAttribArray(positionAttributeLocation);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

        this.gl.vertexAttribPointer(
            positionAttributeLocation, // Attribute location
            2, // Number of elements per attribute
            this.gl.FLOAT, // Type of elements
            false,
            5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
            0 // Offset from the beginning of a single vertex to this attribute
        );

        this.gl.enableVertexAttribArray(colorAttributeLocation);

        this.gl.vertexAttribPointer(
            colorAttributeLocation, // Attribute location
            3, // Number of elements per attribute
            this.gl.FLOAT, // Type of elements
            false,
            5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
            2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
        );

        let primitiveType: number = this.gl.TRIANGLE_FAN;;
        if (this.get_length() <= 2 || this.isLine){
            primitiveType = this.gl.LINE_LOOP
        }
        this.gl.drawArrays(primitiveType, 0, this.get_length());
    }
}