import { spriteMap } from '../spriteLoader.js';

const s = 0.5;

function getTriangleVertices(spriteMap: spriteMap): number[] {
    const u0 = spriteMap.u0; // left
    const v0 = spriteMap.v0; // top
    const u1 = spriteMap.u1; // right
    const v1 = spriteMap.v1; // bottom

    return [
        // x,   y,   z,   U,   V
        -s, 0.0,  s,   u0, v1,
         s, 0.0,  s,   u1, v1,
        -s, 0.0, -s,   u0, v0,
         s, 0.0, -s,   u1, v0,
    ];
}

export const triangleVertices: number[] = getTriangleVertices(spriteMap["floor"]!);

export const indices = [
    0, 1, 2,
    1, 2, 3,
];