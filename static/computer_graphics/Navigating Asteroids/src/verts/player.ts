const c1R = 0.309;
const c1G = 0.317;
const c1B = 0.219;

const c2R = 0.5;
const c2G = 0.5;
const c2B = 0.5;

const l = 1;

const l2 = 0.25;
const w2 = 1.5;

export const triangleVertices: number[] = [
//    x,   y,   z,   r,   g,   b
    -l,  l,  l, c1R, c1G, c1B,  // Top Left
     l,  l,  l, c1R, c1G, c1B,  // Top Right
    -l, -l,  l, c1R, c1G, c1B,  // Bottom Left
     l, -l,  l, c1R, c1G, c1B,  // Bottom right 

    -l,  l,  -l, c1R, c1G, c1B,  // Top Left
     l,  l,  -l, c1R, c1G, c1B,  // Top Right
    -l, -l,  -l, c1R, c1G, c1B,  // Bottom Left
     l, -l,  -l, c1R, c1G, c1B,  // Bottom right  

    w2, -l2,    l2, c2R, c2G, c2B,  // Top Left
    w2,  l2,    l2, c2R, c2G, c2B,  // Top Right
    0, -l2,     l2, c2R, c2G, c2B,  // Bottom Left
    0,  l2,    l2, c2R, c2G, c2B,  // Bottom right 

    w2, -l2,    -l2, c2R, c2G, c2B,  // Top Left
    w2,  l2,    -l2, c2R, c2G, c2B,  // Top Right
    0, -l2,     -l2, c2R, c2G, c2B,  // Bottom Left
    0,  l2,     -l2, c2R, c2G, c2B,  // Bottom right 
];


export const indices = [
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