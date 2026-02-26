import InitWebGLProgram from "./InitWebGLProgram.js";
import Triangle from "./Triangle.js";
import Square from "./Square.js";
import Line from "./Line.js";
import PolyGon from "./PolyGon.js";
import Circle from "./Circle.js";
const vertexShaderSource = `
	precision mediump float;
	attribute vec2 a_position;
	attribute vec3 a_color;
	varying vec3 fragColor;
	void main(){
		gl_Position = vec4(a_position, 0.0, 1.0); 
		fragColor = a_color;
	}	
`;
const fragmentShaderSource = `
    precision mediump float;
    varying vec3 fragColor;
    void main(){
        gl_FragColor = vec4(fragColor, 1.0);
    }
`;
export default class Main {
    webGL;
    program;
    color = [0, 0, 0];
    shapes;
    gl;
    isLine = false;
    positionAttrib;
    colorAttrib;
    shape_selector = 0;
    isPolyGon = false;
    prev_color_id;
    constructor(gl, canvas, shape_id, draw_id, color_ids) {
        this.gl = gl;
        this.prev_color_id = color_ids[0];
        this.webGL = new InitWebGLProgram(gl);
        let vertexShader = this.webGL.createShader(gl.VERTEX_SHADER, vertexShaderSource);
        let fragmentShader = this.webGL.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        this.program = this.webGL.createProgram(vertexShader, fragmentShader);
        gl.useProgram(this.program);
        this.shapes = [this.shape_creator()];
        this.shape_eventlistener(shape_id);
        this.color_eventlistener(color_ids);
        this.style_eventlistener(draw_id);
        this.left_clickeventlistener(canvas);
        this.right_clickeventlistener(canvas);
        this.hover_clickeventlistener(canvas);
        this.positionAttrib = this.gl.getAttribLocation(this.program, "a_position");
        this.colorAttrib = this.gl.getAttribLocation(this.program, "a_color");
        this.render_shapes();
    }
    render_shapes() {
        this.gl.clearColor(0.75, 0.85, 0.8, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        for (const shape of this.shapes) {
            shape.render(this.positionAttrib, this.colorAttrib);
        }
    }
    hover_clickeventlistener(canvas) {
        const rect = canvas.getBoundingClientRect();
        canvas.addEventListener("mousemove", (event) => {
            if (this.shapes.at(-1)?.prev_verticiesamount !== 0) {
                const x = ((event.clientX - rect.left) / canvas.width) * 2 - 1;
                const y = -((event.clientY - rect.top) / canvas.height) * 2 + 1;
                this.shapes.at(-1)?.add_vertice(x, y, this.color);
                this.render_shapes();
                this.shapes.at(-1)?.pop_prev_verticies();
            }
        });
    }
    left_clickeventlistener(canvas) {
        const rect = canvas.getBoundingClientRect();
        canvas.addEventListener("mousedown", (event) => {
            const x = ((event.clientX - rect.left) / canvas.width) * 2 - 1;
            const y = -((event.clientY - rect.top) / canvas.height) * 2 + 1;
            const finished = this.shapes.at(-1)?.add_vertice(x, y, this.color);
            if (finished) {
                this.shapes.push(this.shape_creator());
            }
            this.render_shapes();
        });
    }
    right_clickeventlistener(canvas) {
        canvas.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            if (this.isPolyGon) {
                this.shapes.push(this.shape_creator());
            }
            else {
                this.shapes[this.shapes.length - 1] = this.shape_creator();
            }
            this.render_shapes();
        });
    }
    color_eventlistener(color_ids) {
        const hex_colors = ["#7ad3a7", "#D9BFCC", "#CCBFD9", "#D9CCBF", "#BFD9CC"];
        this.color = this.hexToWebGLColor(hex_colors[0]);
        color_ids.forEach((ids, index) => {
            const hex_color = hex_colors[index];
            ids.style.background = hex_color;
            ids.style.borderColor = hex_color;
            const temp_color = this.hexToWebGLColor(hex_color);
            ids.addEventListener("click", (_event) => {
                this.color = temp_color;
                this.prev_color_id.style.borderColor = hex_color;
                this.prev_color_id = ids;
                ids.style.borderColor = "black";
            });
        });
        this.prev_color_id.style.borderColor = "black";
    }
    style_eventlistener(draw_id) {
        draw_id.addEventListener("change", (event) => {
            switch (event.target.value) {
                case "0":
                    { // Fill
                        this.isLine = false;
                    }
                    break;
                case "1": { // Line
                    this.isLine = true;
                }
            }
        });
    }
    shape_creator() {
        switch (this.shape_selector) {
            case 0: { // Box
                return new Square(this.gl, this.isLine);
            }
            case 1: { // Line
                return new Line(this.gl, this.isLine);
            }
            case 2: { // Circle
                return new Circle(this.gl, this.isLine);
            }
            case 3: { // Triangle
                return new Triangle(this.gl, this.isLine);
            }
            case 4: { // N-Polygon
                return new PolyGon(this.gl, this.isLine);
            }
        }
        return new Square(this.gl, this.isLine);
    }
    shape_eventlistener(shape_id) {
        shape_id.addEventListener("change", (event) => {
            this.shape_selector = Number(event.target.value);
            this.isPolyGon = this.shape_selector == 4 || this.shape_selector == 1;
            this.shapes[this.shapes.length - 1] = this.shape_creator();
        });
    }
    hexToWebGLColor(hex) {
        // Remove the leading '#' if it exists
        const hexValue = hex.startsWith('#') ? hex.substring(1) : hex;
        // Parse the R, G, B components (handles 6-digit hex)
        const rHex = hexValue.substring(0, 2);
        const gHex = hexValue.substring(2, 4);
        const bHex = hexValue.substring(4, 6);
        // Convert hex to decimal (0-255 range)
        const r = parseInt(rHex, 16);
        const g = parseInt(gHex, 16);
        const b = parseInt(bHex, 16);
        // Normalize to WebGL's 0.0 to 1.0 float range
        const webGL_r = r / 255.0;
        const webGL_g = g / 255.0;
        const webGL_b = b / 255.0;
        return [webGL_r, webGL_g, webGL_b];
    }
}
