export default class InitWebGLProgram {

    gl: WebGLRenderingContext;
    constructor(gl: WebGLRenderingContext) {
        this.gl = gl;
        //setup our veiwport
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        //set clear colors RGBA, .5 = 128 in RGB
        gl.clearColor(1, 1, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    createShader(type: number, source: string): WebGLShader | undefined {
        let shader = this.gl.createShader(type)!;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        let success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        //else it didnt work
        console.error(this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
    }

    createProgram(vertexShader: string, fragmentShader: string) {
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
