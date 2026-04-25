const v1 = 1.0;
const v2 = 0.705;
const cR = 0.768;
const cG = 0.768;
const cB = 0.768;
export const triangleVertices = [
    //   x,   y,   z,    r,  g,  b
    v1, v1, 0, cR, cG, cB,
    v1, v2, v2, cR, cG, cB,
    v1, 0, v1, cR, cG, cB,
    v1, -v2, v2, cR, cG, cB,
    v1, -v1, 0, cR, cG, cB,
    v1, -v1, -v1, cR, cG, cB,
    v1, v1, -v1, cR, cG, cB,
    -v1, v1, 0, cR, cG, cB,
    -v1, v2, v2, cR, cG, cB,
    -v1, 0, v1, cR, cG, cB,
    -v1, -v2, v2, cR, cG, cB,
    -v1, -v1, 0, cR, cG, cB,
    -v1, -v1, -v1, cR, cG, cB,
    -v1, v1, -v1, cR, cG, cB,
];
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
