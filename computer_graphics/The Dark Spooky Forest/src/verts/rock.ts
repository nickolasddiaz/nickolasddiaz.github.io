const cR = 0.4176;
const cG = 0.4176;
const cB = 0.4333;


export const triangleVertices: number[] = [
//   x,      y,   z,   r,  g,  b

    // cube 1
0,0,0.5,  cR, cG, cB,
0.5,0,0.5,  cR, cG, cB,
0,0,-0.5,  cR, cG, cB,
0.5,0,-0.5,  cR, cG, cB,

0,0.5,0.9,  cR, cG, cB,
0.7,0.5,0.9,  cR, cG, cB,
0,0.5,-0.5,  cR, cG, cB,
0.7,0.5,-0.5,  cR, cG, cB,

-0.5,0,0.5,  cR, cG, cB,
0,0,0.5,  cR, cG, cB,
-0.5,0,-0.5,  cR, cG, cB,
0,0,-0.5,  cR, cG, cB,

-0.3,0.3,0.9,  cR, cG, cB,
0,0.3,0.9,  cR, cG, cB,
-0.3,0.3,-0.5,  cR, cG, cB,
0,0.3,-0.5,  cR, cG, cB,
];

export const indices = [
    0, 1, 2,
    1, 2, 3,
    // bottom

    4, 5, 6,
    5, 6, 7,
    // top

    0, 1, 4,
    1, 4, 5,
    // side 1

    1, 2, 5,
    2, 5, 6,
    // side 2

    2, 3, 6,
    3, 6, 7,
    // side 3

    3, 0, 7,
    0, 7, 4,
    // side 4

    // square 2
    8, 9, 10,
    9, 10, 11,
    // bottom

    12, 13, 14,
    13, 14, 15,
    // top

    8, 9, 12,
    9, 12, 13,
    // side 1

    9, 10, 13,
    10, 13, 14,
    // side 2

    10, 11, 14,
    11, 14, 15,
    // side 3

    11, 8, 15,
    8, 15, 12,
    // side 4
]