import { spriteMap } from '../spriteLoader.js';
const b1 = 1.0;
const b2 = 0.705;
function getTriangleVertices(spriteMap) {
    const u0 = spriteMap.u0;
    const v0 = spriteMap.v0;
    const u1 = spriteMap.u1;
    const v1 = spriteMap.v1;
    return [
        //   x,   y,   z,   U,   V
        b1, b1, 0, u0, v0,
        b1, b2, b2, u1, v0,
        b1, 0, b1, u0, v1,
        b1, -b2, b2, u1, v1,
        b1, -b1, 0, u0, v0,
        b1, -b1, -b1, u1, v0,
        b1, b1, -b1, u0, v1,
        -b1, b1, 0, u1, v1,
        -b1, b2, b2, u0, v0,
        -b1, 0, b1, u1, v0,
        -b1, -b2, b2, u0, v1,
        -b1, -b1, 0, u1, v1,
        -b1, -b1, -b1, u0, v0,
        -b1, b1, -b1, u1, v0,
    ];
}
export const triangleVertices = getTriangleVertices(spriteMap["bullet"]);
export const indices = [
    0, 1, 2,
    0, 2, 3,
    0, 3, 4,
    0, 4, 5,
    0, 5, 6,
    7, 8, 9,
    7, 9, 10,
    7, 10, 11,
    7, 11, 12,
    7, 12, 13,
    0, 1, 7,
    1, 7, 8,
    1, 2, 8,
    2, 8, 9,
    2, 3, 9,
    3, 9, 10,
    3, 4, 10,
    4, 10, 11,
    4, 5, 11,
    5, 11, 12,
    5, 6, 12,
    6, 12, 13,
    6, 0, 13,
    0, 13, 7,
];
