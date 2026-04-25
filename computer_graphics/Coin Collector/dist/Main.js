import VertexShader3D from './VertexShader3D.js';
import FragmentShader2D from './FragmentShader2D.js';
import InitWebGLProgram from './InitWebGLProgram.js';
import { GameObject } from './GameObject.js';
import Coin from './objects/Coin.js';
import Enemy from './objects/Enemy.js';
import Player from './objects/Player.js';
import VertWall from './objects/VertWall.js';
import HoriWall from './objects/HoriWall.js';
const OBJ_SIZE = 0.05;
export default class Main {
    webGL;
    lastTime = 0;
    Objects;
    gl;
    program;
    Scale;
    Rotation;
    Transform;
    settings;
    coin;
    status;
    coins;
    enemies;
    constructor() {
        const canvas = document.getElementById("myCanvas");
        this.status = document.getElementById("status");
        this.coins = document.getElementById("coins");
        canvas.height = window.screen.height / 2;
        canvas.width = window.screen.height / 2;
        this.gl = canvas.getContext("webgl");
        this.webGL = new InitWebGLProgram(this.gl);
        this.coin = 0;
        this.enemies = 4;
        let vertexShader = this.webGL.createShader(this.gl.VERTEX_SHADER, VertexShader3D);
        let fragmentShader = this.webGL.createShader(this.gl.FRAGMENT_SHADER, FragmentShader2D);
        this.program = this.webGL.createProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.program);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.frontFace(this.gl.CCW);
        this.Scale = this.gl.getUniformLocation(this.program, 'scale');
        this.Rotation = this.gl.getUniformLocation(this.program, 'rotate');
        this.Transform = this.gl.getUniformLocation(this.program, 'trans');
        this.settings = [this.gl, this.program, this.Scale, this.Rotation, this.Transform];
        this.Objects = [
            new VertWall(...this.settings, [.90, OBJ_SIZE, OBJ_SIZE], [0, -.95, 0], [Math.PI, 0, 0]),
            new HoriWall(...this.settings, [OBJ_SIZE, .90, OBJ_SIZE], [-.95, 0, 0], [0, 0, Math.PI]),
            new VertWall(...this.settings, [.90, OBJ_SIZE, OBJ_SIZE], [0, .95, 0], [0, 0, 0]),
            new HoriWall(...this.settings, [OBJ_SIZE, .90, OBJ_SIZE], [.95, 0, 0], [0, 0, 0]),
            new VertWall(...this.settings, [.25, OBJ_SIZE, OBJ_SIZE], [0, -.45, 0], [Math.PI, 0, 0]),
            new HoriWall(...this.settings, [OBJ_SIZE, .25, OBJ_SIZE], [-.45, 0, 0], [0, 0, 0]),
            new VertWall(...this.settings, [.25, OBJ_SIZE, OBJ_SIZE], [0, .45, 0], [0, 0, 0]),
            new HoriWall(...this.settings, [OBJ_SIZE, .25, OBJ_SIZE], [.45, 0, 0], [0, 0, 0]),
            new Enemy(...this.settings, [OBJ_SIZE, OBJ_SIZE, OBJ_SIZE], [-.60, .60, 0], this.enemy_count.bind(this)),
            new Enemy(...this.settings, [OBJ_SIZE, OBJ_SIZE, OBJ_SIZE], [-.60, -.60, 0], this.enemy_count.bind(this)),
            new Enemy(...this.settings, [OBJ_SIZE, OBJ_SIZE, OBJ_SIZE], [.60, .60, 0], this.enemy_count.bind(this)),
            new Enemy(...this.settings, [OBJ_SIZE, OBJ_SIZE, OBJ_SIZE], [.60, -.60, 0], this.enemy_count.bind(this)),
            new Coin(...this.settings, [.01, OBJ_SIZE, OBJ_SIZE], [.70, 0, -.1], [0, 0, 0], this.add_coin.bind(this)),
            new Coin(...this.settings, [.01, OBJ_SIZE, OBJ_SIZE], [0, .70, -.1], [0, 0, 0], this.add_coin.bind(this)),
            new Coin(...this.settings, [.01, OBJ_SIZE, OBJ_SIZE], [-.70, 0, -.1], [0, 0, 0], this.add_coin.bind(this)),
            new Coin(...this.settings, [.01, OBJ_SIZE, OBJ_SIZE], [0, -.70, -.1], [0, 0, 0], this.add_coin.bind(this)),
            new Player(...this.settings, [OBJ_SIZE, OBJ_SIZE, OBJ_SIZE], [.2, 0, 0], this.add_object.bind(this), this.loose.bind(this)),
        ];
    }
    add_object(object) {
        this.Objects.push(object);
    }
    add_coin() {
        this.coin += 1;
        this.coins.textContent = `Coin Amount: ${this.coin}`;
        this.check_status();
    }
    enemy_count() {
        this.enemies -= 1;
        this.check_status();
    }
    check_status() {
        if (this.enemies === 0 && this.coin === 4) {
            this.status.textContent = "You Win 👍";
        }
    }
    loose() {
        this.status.textContent = "You Loose 😩 (Skill Issue? 🤬)";
    }
    update(timestamp) {
        const deltaTime = Math.min(((timestamp - this.lastTime) / 1000), .1);
        this.lastTime = timestamp;
        this.gl.clearColor(0.75, 0.85, 0.8, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        for (const [index, shape] of this.Objects.entries()) {
            for (const [index2, shape2] of this.Objects.entries()) {
                if (index < index2 && shape.collided(shape2)) {
                    if (shape.collide(shape2)) {
                        this.Objects.splice(index, 1);
                    }
                    if (shape2.collide(shape)) {
                        this.Objects.splice(index2, 1);
                    }
                }
            }
        }
        for (const shape of this.Objects) {
            shape.update(deltaTime / 4);
            shape.render();
        }
        requestAnimationFrame((ts) => this.update(ts));
    }
}
