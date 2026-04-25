const cR = 0.588;
const cG = 0.435;
const cB = 0.200;

const lR = 0.361;
const lG = 0.663;
const lB = 0.016;

const fpi = Math.sqrt(2) / 2;

const woodL = 0.5;
const woodF = woodL * fpi;

const leafL = 1.0;
const leafF = leafL * fpi;

const woodH = 2;
const leafH = woodH + 3;

export const triangleVertices: number[] = [
//   x,          y,      z,  r,   g,  b
     woodL,      0,      0,  cR, cG, cB,
     woodF,      0,  woodF,  cR, cG, cB,
         0,      0,  woodL,  cR, cG, cB,
    -woodF,      0,  woodF,  cR, cG, cB,
    -woodL,      0,      0,   cR, cG, cB,
    -woodF,      0, -woodF,  cR, cG, cB,
         0,      0, -woodL,  cR, cG, cB,
     woodF,      0, -woodF,  cR, cG, cB,

     woodL,  woodH,      0,  cR, cG, cB,
     woodF,  woodH,  woodF,  cR, cG, cB,
         0,  woodH,  woodL,  cR, cG, cB,
    -woodF,  woodH,  woodF,  cR, cG, cB,
    -woodL,  woodH,      0,  cR, cG, cB,
    -woodF,  woodH, -woodF,  cR, cG, cB,
         0,  woodH, -woodL,  cR, cG, cB,
     woodF,  woodH, -woodF,  cR, cG, cB,

     leafL,  woodH,      0,  lR, lG, lB,
     leafF,  woodH,  leafF,  lR, lG, lB,
         0,  woodH,  leafL,  lR, lG, lB,
    -leafF,  woodH,  leafF,  lR, lG, lB,
    -leafL,  woodH,      0,  lR, lG, lB,
    -leafF,  woodH, -leafF,  lR, lG, lB,
         0,  woodH, -leafL,  lR, lG, lB,
     leafF,  woodH, -leafF,  lR, lG, lB,

         0,  leafH,      0,  lR, lG, lB,
];

export const indices = [
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

    16, 17, 24,
    17, 18, 24,
    18, 19, 24,
    19, 20, 24,
    20, 21, 24,
    21, 22, 24,
    22, 23, 24,
    23, 16, 24,
]