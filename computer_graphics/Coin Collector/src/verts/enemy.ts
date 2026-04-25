
const v1 = 1;
const v2 = 0.705;

const cR = 0.650;
const cG = 0.098;
const cB = 0.180;

export const triangleVertices: number[] = [
//   x,   y,   z,     r,  g,  b
     v1,  0,   v1,  cR, cG, cB,
     v2,  v2,  v1,  cR, cG, cB,
     0,   v1,  v1,  cR, cG, cB,
    -v2,  v2,  v1,  cR, cG, cB,
    -v1,  0,   v1,  cR, cG, cB,
    -v2, -v2,  v1,  cR, cG, cB,
     0,  -v1,  v1,  cR, cG, cB,
     v2, -v2,  v1,  cR, cG, cB,

     v1,  0,  -v1,  cR, cG, cB,
     v2,  v2, -v1,  cR, cG, cB,
     0,   v1, -v1,  cR, cG, cB,
    -v2,  v2, -v1,  cR, cG, cB,
    -v1,  0,  -v1,  cR, cG, cB,
    -v2, -v2, -v1,  cR, cG, cB,
     0,  -v1, -v1,  cR, cG, cB,
     v2, -v2, -v1,  cR, cG, cB,

];

export const indices = [
    0, 1, 2,
    0, 2, 3,
    0, 3, 4,
    0, 4, 5,
    0, 5, 6,
    0, 6, 7,

    8, 9, 10,
    8, 10, 11,
    8, 11, 12,
    8, 12, 13,
    8, 13, 14,
    8, 14, 15,

    0, 1, 8,
    1, 8, 9,

    1, 2, 9,
    2, 9, 10,

    2, 3, 10,
    3, 10, 11,

    3, 4, 11,
    4, 11, 12,

    4, 5, 12,
    5, 12, 13,

    5, 6, 13,
    6, 13, 14,

    6, 7, 14,
    7, 14, 15,

    7, 0, 15,
    0, 15, 8,
]