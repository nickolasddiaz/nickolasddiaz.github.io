const cR = 0.186;
const cG = 0.488;
const cB = 0.0;


export const triangleVertices: number[] = [
//   x,      y,    z,   r,  g,  b
    -0.5, 0.0,   0.5,  cR, cG, cB, // Top-left
     0.5, 0.0,   0.5,  cR, cG, cB, // Top-right
    -0.5, 0.0,  -0.5,  cR, cG, cB, // Bottom-left
     0.5, 0.0,  -0.5,  cR, cG, cB, // Bottom-right
];

export const indices = [
    0, 1, 2,
    1, 2, 3,
]