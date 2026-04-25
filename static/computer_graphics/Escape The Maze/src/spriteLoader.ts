import data from '../assets/sprites.json' with { type: "json" };

// Texture Atlas used https://www.leshylabs.com/apps/sstool/

type SpriteEntry = {
    name: string,
    x: number,
    y: number,
    width: number,
    height: number,
}[];

export type spriteMap = {
        x: number,
        y: number,
        width: number,
        height: number,
        u0: number,
        v0: number,
        u1: number,
        v1: number
    };

const atlas_width = 1024;
const atlas_height = 1024;
const UV_INSET_PIXELS = 0.5;

export const spriteMap: Record<string, spriteMap> = {};
(data as SpriteEntry).forEach(item => {
    const insetX = UV_INSET_PIXELS / atlas_width;
    const insetY = UV_INSET_PIXELS / atlas_height;

    spriteMap[item.name] = {
        x: item.x,
        y: item.y,
        width: item.width,
        height: item.height,
        u0: (item.x / atlas_width) + insetX,
        u1: ((item.x + item.width) / atlas_width) - insetX,
        v0: (item.y / atlas_height) + insetY,
        v1: ((item.y + item.height) / atlas_height) - insetY,
    };
});