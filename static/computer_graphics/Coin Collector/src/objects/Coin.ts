import {type vec3, GameObjectEnum, GameObject, TAU} from '../GameObject.js';
import {triangleVertices, indices} from '../verts/coin.js';

export default class Coin extends GameObject{
    add_coin: () => void;
    constructor(gl: WebGLRenderingContext, program: WebGLProgram,
        mScale: WebGLUniformLocation , mRotation: WebGLUniformLocation , mTransform: WebGLUniformLocation,
        size: vec3, start_position: vec3, rotate: vec3, add_coin: () => void,
    ){
        super(gl, program, size, start_position, rotate,
            GameObjectEnum.COIN, mScale, mRotation, mTransform,
            triangleVertices, indices
        );
        this.add_coin = add_coin;
    }

    update(deltatime: number): void {
        // rotate in the Y direction
        this.rotation[1] += deltatime * 10;
        this.rotation[1] %= TAU;
    }

    collide(otherObject: GameObject): boolean {
        if (otherObject.objectType == GameObjectEnum.PLAYER){
            this.add_coin();
            return true;
        }
        return false;
    }
    
}