const c1R = 0.733;
const c1G = 0.733;
const c1B = 0.733;
export const triangleVertices = [
    //   x,  y,  z,   r,   g,   b
    -2, 2, 0, c1R, c1G, c1B,
    -2, -2, 0, c1R, c1G, c1B,
    2, 2, 0, c1R, c1G, c1B,
    2, -2, 0, c1R, c1G, c1B,
];
export const indices = [
    0, 1, 2,
    1, 3, 2,
];
