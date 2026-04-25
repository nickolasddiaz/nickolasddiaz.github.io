import { spriteMap } from '../spriteLoader.js';
const s = 0.5;
const t = s * 2;
function getTriangleVertices(spriteMap) {
    const u0 = spriteMap.u0; // Left
    const v0 = spriteMap.v0; // Top
    const u1 = spriteMap.u1; // Right
    const v1 = spriteMap.v1; // Bottom
    return [
        //   x,   y,    z,   U,    V
        -s, t, 0, u0, v0, // Top Left
        s, t, 0, u1, v0, // Top Right
        -s, 0, 0, u0, v1, // Bottom Left
        s, 0, 0, u1, v1 // Bottom Right
    ];
}
export const triangleVertices1 = getTriangleVertices(spriteMap["enemy_1"]);
export const triangleVertices2 = getTriangleVertices(spriteMap["enemy_2"]);
export const triangleVertices3 = getTriangleVertices(spriteMap["enemy_3"]);
export const indices = [
    0, 1, 2,
    1, 2, 3,
];
