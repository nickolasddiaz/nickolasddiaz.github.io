import {type color} from './Main.js'


export default abstract class ShapeCreator {
    
    gl: WebGLRenderingContext;
    positionBuffer: WebGLBuffer;
    triangleVertices: number[];
    isLine: boolean;
    prev_verticiesamount: number = 0;

    constructor(gl: WebGLRenderingContext, isFill: boolean) {
        this.gl = gl
        this.isLine = isFill;
        this.triangleVertices = [];
        this.positionBuffer = gl.createBuffer();
    }

    abstract add_vertice(x: number, y: number, color: color): boolean;
    abstract render(positionAttributeLocation: number, colorAttributeLocation: number): void;

    get_length(): number{
        return this.triangleVertices.length / 5
    }

    pop_prev_verticies(){
        this.triangleVertices.length -= this.prev_verticiesamount * 5;
    }

}