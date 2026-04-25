import { spriteMap } from '../spriteLoader.js';
const s = 0.5;
const t = s * 2;
function getTriangleVertices(spriteMap) {
    const u0 = spriteMap.u0;
    const v0 = spriteMap.v0;
    const u1 = spriteMap.u1;
    const v1 = spriteMap.v1;
    return [
        //   x,    y,  z,  U,   V
        s, 0, s, u1, v1,
        s, t, s, u1, v0,
        -s, 0, s, u0, v1,
        -s, t, s, u0, v0,
        s, 0, -s, u0, v1,
        s, t, -s, u0, v0,
        -s, 0, -s, u1, v1,
        -s, t, -s, u1, v0,
    ];
}
export const triangleVertices1 = getTriangleVertices(spriteMap["wall_1"]);
export const triangleVertices2 = getTriangleVertices(spriteMap["wall_2"]);
export const indices = [
    0, 1, 2, // Front face
    1, 3, 2,
    4, 5, 6, // Back face
    5, 7, 6,
    0, 1, 4, // Top face
    1, 5, 4,
    2, 3, 6, // Bottom face
    3, 7, 6,
    0, 2, 4, // Left face
    2, 6, 4,
    1, 3, 5, // Right face
    3, 7, 5,
];
