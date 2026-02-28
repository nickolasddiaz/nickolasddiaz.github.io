import type { color } from "./Main.js";
import ShapeCreator from "./ShapeCreator.js";

export default class Line extends ShapeCreator{
    constructor(gl: WebGLRenderingContext, isFill: boolean){
        super(gl, isFill);
    }

    add_vertice(x: number, y: number, color: color): boolean{
        this.triangleVertices.push(x, y, color[0], color[1], color[2])
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.triangleVertices), this.gl.STATIC_DRAW);
        this.prev_verticiesamount = 1

        return false
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


        this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.get_length());
    }
}