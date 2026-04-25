import { spriteMap } from '../spriteLoader.js';

const s = 0.5;
const t = s * 2;

const h = t + s;

function getTriangleVertices(woodMap: spriteMap, fireMap: spriteMap): number[] {
    const u0 = woodMap.u0;   // Left
    const v0 = woodMap.v0;   // Top
    const u1 = woodMap.u1;   // Right
    const v1 = woodMap.v1;   // Bottom

    const uf0 = fireMap.u0;   // Left
    const vf0 = fireMap.v0;   // Top
    const uf1 = fireMap.u1;   // Right
    const vf1 = fireMap.v1;   // Bottom

    return [
//   x,   y,   z,  U,   V
// cube 1
     s,   0,   s,  uf1,  vf1,
     s,   t,   s,  uf1,  vf0,
    -s,   0,   s,  uf0,  vf1,
    -s,   t,   s,  uf0,  vf0, 

     s,   0,  -s,  uf1,  vf1,
     s,   t,  -s,  uf1,  vf0,
    -s,   0,  -s,  uf0,  vf1,
    -s,   t,  -s,  uf0,  vf0, 

// cube 2
     s,   t,   s,  u1,  v1,
     s,   h,   s,  u1,  v0,
    -s,   t,   s,  u0,  v1,
    -s,   h,   s,  u0,  v0, 

     s,   t,  -s,  u1,  v1,
     s,   h,  -s,  u1,  v0,
    -s,   t,  -s,  u0,  v1,
    -s,   h,  -s,  u0,  v0, 
];
}

export const triangleVertices: number[] = getTriangleVertices(spriteMap["torch"]!, spriteMap["wood"]!);

export const indices = [
// cube 1
    0,  1,  2, // Front face
    1,  3,  2,

    4,  5,  6, // Back face
    5,  7,  6,

    0,  1,  4, // Top face
    1,  5,  4,

    2,  3,  6, // Bottom face
    3,  7,  6,

    0,  2,  4, // Left face
    2,  6,  4,

    1,  3,  5, // Right face
    3,  7,  5,

// cube 2
    8,  9,  10, // Front face
    9,  11,  10,

    12,  13,  14, // Back face
    13,  15,  14,

    8,  9,  12, // Top face
    9,  13,  12,

    10,  11,  14, // Bottom face
    11,  15,  14,

    8,  10,  12, // Left face
    10,  14,  12,

    9,  11,  13, // Right face
    11,  15,  13,

]