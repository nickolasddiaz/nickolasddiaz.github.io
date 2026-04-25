
export default class InitWebGLProgram {
    gl: WebGLRenderingContext;
    constructor(gl: WebGLRenderingContext) {
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        this.gl = gl;
    }
    createShader(type: number, source: string) {
        let shader = this.gl.createShader(type) as WebGLShader;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        let success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (success) {
            return shader as WebGLShader;
        }
        //else it didnt work
        console.error(this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
    }

    createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        let program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        let success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (success) {
            return program;
        }
        console.error(this.gl.getProgramInfoLog(program));
        this.gl.deleteProgram(program);
    }
}