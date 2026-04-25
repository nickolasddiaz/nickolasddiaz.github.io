export type vec3 = [number, number, number];

export const TAU = 2 * Math.PI;

type ObjectType = number;
export const GameObjectEnum = {
    BULLET: 0 as ObjectType,
    COIN: 1 as ObjectType,
    ENEMY: 2 as ObjectType,
    PLAYER: 3 as ObjectType,
    WALL: 4 as ObjectType,
}as const;

export abstract class GameObject {
    gl: WebGLRenderingContext;
    scale: vec3;
    transform: vec3;
    rotation: vec3;
    mScale: WebGLUniformLocation;
    mRotation: WebGLUniformLocation;
    mTransform: WebGLUniformLocation;
    indexSize: number;
    positionBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    program: WebGLProgram;
    objectType: ObjectType;

    constructor(gl: WebGLRenderingContext, program: WebGLProgram,
        size: vec3, start_position: vec3, rotate: vec3,
        colision_bits: number,
        mScale: WebGLUniformLocation, mRotation: WebGLUniformLocation, mTransform: WebGLUniformLocation,
        triangleVertices: number[], indices: number[]
    ) {
        this.gl = gl;
        this.scale = size;
        this.transform = start_position;
        this.rotation = rotate;
        this.mScale = mScale;
        this.mRotation = mRotation;
        this.mTransform = mTransform;
        this.program = program;
        this.objectType = colision_bits;

        this.indexSize = indices.length;

        this.positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    }

    abstract update(deltatime: number): void

    abstract collide(otherObject: GameObject): boolean

    render(): void {
        this.gl.uniform3fv(this.mScale, this.scale);
        this.gl.uniform3fv(this.mRotation, this.rotation);
        this.gl.uniform3fv(this.mTransform, this.transform);


        const positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");
        this.gl.enableVertexAttribArray(positionAttributeLocation);


        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

        this.gl.vertexAttribPointer(
            positionAttributeLocation,
            3,
            this.gl.FLOAT,
            false,
            6 * Float32Array.BYTES_PER_ELEMENT,
            0
        );

        const colorAttributeLocation = this.gl.getAttribLocation(this.program, "a_color");
        this.gl.enableVertexAttribArray(colorAttributeLocation);

        this.gl.vertexAttribPointer(
            colorAttributeLocation,
            3,
            this.gl.FLOAT,
            false,
            6 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT
        );

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.drawElements(this.gl.TRIANGLES, this.indexSize, this.gl.UNSIGNED_SHORT, 0)
    }

    collided(other: GameObject): boolean {
        return (
            this.transform[0] - this.scale[0] < other.transform[0] + other.scale[0] &&
            this.transform[0] + this.scale[0] > other.transform[0] - other.scale[0] &&
            this.transform[1] - this.scale[1] < other.transform[1] + other.scale[1] &&
            this.transform[1] + this.scale[1] > other.transform[1] - other.scale[1]
        );
    }
}