export const TAU = 2 * Math.PI;
export const GameObjectEnum = {
    BULLET: 0,
    ASTEROID: 1,
    PLAYER: 2,
};
export class GameObject {
    scale;
    transform;
    rotation;
    indexSize;
    positionBuffer;
    indexBuffer;
    objectType;
    constructor(gl, size, start_position, rotate, colision_bits, triangleVertices, indices) {
        this.scale = size;
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
    render(gl, program, mscale, mrot, mtrans, mcameraPos, mcameraRot, player) {
        gl.uniform3fv(mtrans, this.transform);
        gl.uniform3fv(mrot, this.rotation);
        gl.uniform3fv(mscale, [this.scale, this.scale, this.scale]);
        gl.uniform3fv(mcameraPos, player.transform);
        gl.uniform3fv(mcameraRot, player.rotation);
        const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
        const colorAttributeLocation = gl.getAttribLocation(program, "a_color");
        gl.enableVertexAttribArray(colorAttributeLocation);
        gl.vertexAttribPointer(colorAttributeLocation, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.drawElements(gl.TRIANGLES, this.indexSize, gl.UNSIGNED_SHORT, 0);
    }
    collided(other) {
        // colision detection/resolution for spheres
        // starting colision detection
        const center1 = this.transform;
        const center2 = other.transform;
        const distx = center1[0] - center2[0];
        const disty = center1[1] - center2[1];
        const distz = center1[2] - center2[2];
        const radius1 = this.scale;
        const radius2 = other.scale;
        const radiusSum = radius1 + radius2;
        const dist_dot = distx * distx + disty * disty + distz * distz;
        const rad_sum_squared = radiusSum * radiusSum;
        if (dist_dot <= rad_sum_squared) { // colided
            // colision resolution
            const dist = Math.sqrt(dist_dot);
            // normalise distance
            let normalx = 1, normaly = 0, normalz = 0;
            if (dist > 0) {
                normalx = distx / dist;
                normaly = disty / dist;
                normalz = distz / dist;
            }
            // Minimum Translation Vector
            const mtv = (radiusSum - dist) * 0.5;
            const halfMtvX = normalx * mtv;
            const halfMtvY = normaly * mtv;
            const halfMtvZ = normalz * mtv;
            this.transform[0] += halfMtvX;
            this.transform[1] += halfMtvY;
            this.transform[2] += halfMtvZ;
            other.transform[0] -= halfMtvX;
            other.transform[1] -= halfMtvY;
            other.transform[2] -= halfMtvZ;
            return true;
        }
        return false;
    }
    go_forward(velocity) {
        const forwardX = Math.cos(this.rotation[0]) * Math.sin(this.rotation[1]);
        const forwardY = Math.sin(this.rotation[0]);
        const forwardZ = Math.cos(this.rotation[0]) * Math.cos(this.rotation[1]);
        this.transform[0] += forwardX * velocity;
        this.transform[1] += forwardY * velocity;
        this.transform[2] += forwardZ * velocity;
    }
}
