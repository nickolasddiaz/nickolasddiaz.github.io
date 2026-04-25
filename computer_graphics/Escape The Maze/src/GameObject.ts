import {
    type Main
} from './Main.js';

export type vec3 = [number, number, number];

export const TAU = 2 * Math.PI;

type ObjectType = number;
export const GameObjectEnum = {
    PLAYER: 1 as ObjectType,
    BULLET: 2 as ObjectType,
    WALL: 3 as ObjectType,
    FLOOR: 4 as ObjectType,
    BADGUY: 5 as ObjectType,
    TORCH: 6 as ObjectType,
} as const;

export abstract class GameObject {
    scale: number;
    transform: vec3;
    rotation: vec3;
    indexSize: number;
    positionBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    objectType: ObjectType;
    size: vec3;
    csize: vec3;

    constructor(gl: WebGLRenderingContext,
        size: vec3, start_position: vec3, rotate: vec3,
        colision_bits: number, triangleVertices: number[], indices: number[]
    ) {
        this.scale = size[0];
        this.size = size;
        this.csize = [size[0]/2, size[1]/2, size[2]/2]; // used for AABB detection the center is needed
        this.transform = start_position;
        this.rotation = rotate;
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

    render_rotation(): vec3{
        return this.rotation;
    }

    render(mn: Main): void {
        const gl: WebGLRenderingContext = mn.gl;
        gl.uniform3fv(mn.Transform, this.transform);
        gl.uniform3fv(mn.Rotation, this.render_rotation());
        gl.uniform3fv(mn.Scale, this.size);

        gl.uniform3fv(mn.CameraPos, mn.player.transform);
        gl.uniform3fv(mn.CameraRot, mn.player.rotation);

        gl.uniform3fv(mn.pointLoc, mn.point_list);



        gl.enableVertexAttribArray(mn.positionAttLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

        gl.vertexAttribPointer(
            mn.positionAttLoc,
            3,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            0
        );

        gl.enableVertexAttribArray(mn.samplerAttLoc);

        gl.vertexAttribPointer(
            mn.samplerAttLoc,
            2,
            gl.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT
        );

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.drawElements(gl.TRIANGLES, this.indexSize, gl.UNSIGNED_SHORT, 0)
    }

    point_colide(other: GameObject): boolean {
        // colision detection/resolution for spheres
        // starting colision detection

        const center1 = this.transform;
        const center2 = other.transform;

        const distx = center1[0] - center2[0];
        const distz = center1[2] - center2[2];

        const radius1 = this.scale;
        const radius2 = other.scale;
        const radiusSum = radius1 + radius2;

        const dist_dot = distx * distx + distz * distz;
        const rad_sum_squared = radiusSum * radiusSum;

        if (dist_dot <= rad_sum_squared) { // colided

            // colision resolution
            const dist = Math.sqrt(dist_dot);

            // normalise distance
            let normalx = 1,
                normalz = 0;
            if (dist > 0) {
                normalx = distx / dist;
                normalz = distz / dist;
            }

            // Minimum Translation Vector
            const mtv = (radiusSum - dist);

            const halfMtvX = normalx * mtv;
            const halfMtvZ = normalz * mtv;

            this.transform[0] += halfMtvX;
            this.transform[2] += halfMtvZ;

            return true;
        }

        return false;
    }

    AABB_colide(other: GameObject): boolean {
        if (!(
            this.transform[0] - this.csize[0] < other.transform[0] + other.csize[0] &&
            this.transform[0] + this.csize[0] > other.transform[0] - other.csize[0] &&
            this.transform[2] - this.csize[2] < other.transform[2] + other.csize[2] &&
            this.transform[2] + this.csize[2] > other.transform[2] - other.csize[2]
        )) {
            return false;
        }

        // Collision resolution for x and y only
        const overlapX = Math.min(
            this.transform[0] + this.csize[0] - (other.transform[0] - other.csize[0]),
            (other.transform[0] + other.csize[0]) - (this.transform[0] - this.csize[0])
        );
        const overlapY = Math.min(
            this.transform[2] + this.csize[2] - (other.transform[2] - other.csize[2]),
            (other.transform[2] + other.csize[2]) - (this.transform[2] - this.csize[2])
        );

        if (overlapX < overlapY) {
            // Resolve x collision
            if (this.transform[0] < other.transform[0]) {
                this.transform[0] -= overlapX;
            } else {
                this.transform[0] += overlapX;
            }
        } else {
            // Resolve z collision
            if (this.transform[2] < other.transform[2]) {
                this.transform[2] -= overlapY;
            } else {
                this.transform[2] += overlapY;
            }
        }

        return true;
    }


    go_forward(velocity: number): void {
        const forwardX = Math.cos(this.rotation[0]) * Math.sin(this.rotation[1]);
        const forwardZ = Math.cos(this.rotation[0]) * Math.cos(this.rotation[1]);

        this.transform[0] += forwardX * velocity;
        this.transform[2] += forwardZ * velocity;
    }

}