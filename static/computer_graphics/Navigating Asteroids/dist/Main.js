import InitWebGLProgram from './InitWebGLProgram.js';
import { GameObject } from './GameObject.js';
import Player from './objects/Player.js';
import Asteroid from './objects/Asteroid.js';
import Bullet from './objects/Bullet.js';
const OUTSIDE = 200;
const ASTEROID_COUNT = 200;
const X_SPACE = 100;
const Y_SPACE = 10;
const Z_SPACE = 10;
const ASTEROID_ROTATION_LOW = .01;
const ASTEROID_ROTATION_HIGH = .05;
const TRIES = 1000;
const AST_MAX_SIZE = 2;
const AST_MIN_SIZE = .5;
async function loadShader(url) {
    const response = await fetch(url);
    return await response.text();
}
export default async function get_main() {
    let FragmentShader2D = await loadShader('/computer_graphics/Navigating Asteroids/shaders/FragmentShader2D.frag');
    let VertexShader3D = await loadShader('/computer_graphics/Navigating Asteroids/shaders/VertexShader3D.vert');
    return new Main(VertexShader3D, FragmentShader2D);
}
class Main {
    webGL;
    gl;
    program;
    Scale;
    Rotation;
    Transform;
    CameraPos;
    CameraRot;
    player;
    bullets;
    asteroids;
    lastTime = 0;
    render_settings;
    constructor(VertexShader3D, FragmentShader2D) {
        const canvas = document.getElementById("myCanvas");
        canvas.height = window.screen.height / 2;
        canvas.width = window.screen.height / 2;
        this.gl = canvas.getContext("webgl");
        this.webGL = new InitWebGLProgram(this.gl);
        let vertexShader = this.webGL.createShader(this.gl.VERTEX_SHADER, VertexShader3D);
        let fragmentShader = this.webGL.createShader(this.gl.FRAGMENT_SHADER, FragmentShader2D);
        this.program = this.webGL.createProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.program);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.Transform = this.gl.getUniformLocation(this.program, 'trans');
        this.Rotation = this.gl.getUniformLocation(this.program, 'rotate');
        this.Scale = this.gl.getUniformLocation(this.program, 'scale');
        this.CameraPos = this.gl.getUniformLocation(this.program, 'camerapos');
        this.CameraRot = this.gl.getUniformLocation(this.program, 'camerarot');
        this.player = new Player(this.gl, 4, [0, 0, -40], this.add_object.bind(this));
        this.render_settings = [this.gl, this.program, this.Scale, this.Rotation, this.Transform, this.CameraPos, this.CameraRot, this.player];
        this.asteroids = [];
        this.bullets = [];
        const xSet = new Set();
        const ySet = new Set();
        const zSet = new Set();
        let x_space, y_space, z_space = 0;
        let x_temp, y_temp, z_temp = 0;
        let x_rot, y_rot, z_rot = 0;
        let tries = 0;
        let size = 0;
        for (let i = 0; i < ASTEROID_COUNT; i++) {
            do {
                tries += 1;
                x_space = this.getRandomFloat(-X_SPACE, X_SPACE);
                y_space = this.getRandomFloat(-Y_SPACE, Y_SPACE);
                z_space = this.getRandomFloat(-Z_SPACE, Z_SPACE);
                x_temp = Math.round(x_space / AST_MAX_SIZE);
                y_temp = Math.round(y_space / AST_MAX_SIZE);
                z_temp = Math.round(z_space / AST_MAX_SIZE);
            } while (tries < TRIES && xSet.has(x_temp) && ySet.has(y_temp) && zSet.has(z_temp));
            xSet.add(x_temp);
            ySet.add(y_temp);
            zSet.add(z_temp);
            x_rot = this.randomFlip(this.getRandomFloat(ASTEROID_ROTATION_LOW, ASTEROID_ROTATION_HIGH));
            y_rot = this.randomFlip(this.getRandomFloat(ASTEROID_ROTATION_LOW, ASTEROID_ROTATION_HIGH));
            z_rot = this.randomFlip(this.getRandomFloat(ASTEROID_ROTATION_LOW, ASTEROID_ROTATION_HIGH));
            size = this.getRandomFloat(AST_MIN_SIZE, AST_MAX_SIZE);
            this.asteroids.push(new Asteroid(this.gl, size, [x_space, y_space, z_space], [x_rot, y_rot, z_rot]));
        }
    }
    add_object(object) {
        this.bullets.push(object);
    }
    update(timestamp) {
        const deltaTime = Math.min(((timestamp - this.lastTime) / 1000), .1);
        this.lastTime = timestamp;
        this.gl.clearColor(0.75, 0.85, 0.8, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.player.update(deltaTime);
        for (const aster of this.asteroids) {
            this.player.collided(aster);
        }
        for (const [index, shape] of this.bullets.entries()) {
            shape.collided(this.player);
        }
        for (const [index, shape] of this.asteroids.entries()) {
            for (const [index2, shape2] of this.bullets.entries()) {
                if (shape.collided(shape2)) {
                    if (shape.collide(shape2)) {
                        this.asteroids.splice(index, 1);
                    }
                    if (shape2.collide(shape)) {
                        this.bullets.splice(index2, 1);
                    }
                }
            }
        }
        for (const shape of this.asteroids) {
            shape.update(deltaTime / 4);
            shape.render(...this.render_settings);
        }
        for (const [index, shape] of this.bullets.entries()) {
            if (Math.abs(shape.transform[0]) > OUTSIDE ||
                Math.abs(shape.transform[1]) > OUTSIDE ||
                Math.abs(shape.transform[2]) > OUTSIDE) {
                this.bullets.splice(index, 1);
            }
            shape.update(deltaTime / 4);
            shape.render(...this.render_settings);
        }
        requestAnimationFrame((ts) => this.update(ts));
    }
    getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    randomFlip(value) {
        return Math.random() < 0.5 ? -value : value;
    }
}
