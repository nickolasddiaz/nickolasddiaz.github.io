export const min_frame_rate: number = 1 / 16;

export const height = 10;
export const width = height * 0.60;

export const max_side: number = Math.sqrt(width ** 2 + height ** 2);
export const half_side: number = max_side / 2;
export const mass: number = 1;
export const inertia: number = (mass * (width ** 2 + height ** 2)) / 12;
export const inv_inertia: number = 1 / inertia;

export const canvas_width: number = 400;
export const canvas_height: number = 400;
export const elasticity: number= 0.7;

export const DEFAULT_CAPACITY: number = 16;
export const MAX_DEPTH: number = 8;

const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

export function generateRandomCharacter(): string {
   const randomIndex: number = Math.floor(Math.random() * characters.length);
   return characters.charAt(randomIndex);
}


// https://textpaint.com/text-art/ pipes
export const ascii_art: string = `
    ╔╗╔╗╔╗    ╔╗                 
    ║║║║║║    ║║                 
    ║║║║║║╔══╗║║ ╔══╗╔══╗╔╗╔╗╔══╗
    ║╚╝╚╝║║╔╗║║║ ║╔═╝║╔╗║║╚╝║║╔╗║
    ╚╗╔╗╔╝║║═╣║╚╗║╚═╗║╚╝║║║║║║║═╣
     ╚╝╚╝ ╚══╝╚═╝╚══╝╚══╝╚╩╩╝╚══╝
                             
 ╔╗                             ╔╗     
╔╝╚╗                           ╔╝╚╗    
╚╗╔╝╔══╗    ╔╗╔╗╔╗ ╔╗    ╔══╗╔╗╚╗╔╝╔══╗
 ║║ ║╔╗║    ║╚╝║║║ ║║    ║══╣╠╣ ║║ ║╔╗║
 ║╚╗║╚╝║    ║║║║║╚═╝║    ╠══║║║ ║╚╗║║═╣
 ╚═╝╚══╝    ╚╩╩╝╚═╗╔╝    ╚══╝╚╝ ╚═╝╚══╝
                ╔═╝║                   
                ╚══╝                                                                                                                                                 
`;

export const charCache: Map<string, OffscreenCanvas> = new Map();

const uniqueChars: Set<string> = new Set([...ascii_art, ...characters]);



export function initCharCache() {
   if (typeof OffscreenCanvas === 'undefined') return;

   uniqueChars.forEach(char => {
      const size = height;
      const offCanvas = new OffscreenCanvas(size * 2, size * 2);
      const oCtx = offCanvas.getContext('2d')!;

      oCtx.font = `${size}px monospace`;
      oCtx.fillStyle = '#0000ff';
      oCtx.textAlign = 'center';
      oCtx.textBaseline = 'middle';

      oCtx.fillText(char, size, size);
      charCache.set(char, offCanvas);
   });
}