import {Entity} from './entity.js';
import {Rectangle, QuadTree} from './quadtree.js';
import {ascii_art, height, width, canvas_width, canvas_height, generateRandomCharacter, min_frame_rate} from './const.js'
import type {Point} from "./vec2";

export default function run(canvas: HTMLCanvasElement) {
  
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
  if (!ctx) return;
  
  const entities: Entity[] = []
  
  function isWhitespace(char: string): boolean {
      return /\s/.test(char);
  }
  
  
  for (const [y, linesArray] of ascii_art.split(/\r?\n/).entries()){
      for (const [x, char] of linesArray.split('').entries()) {
          if (!isWhitespace(char)){
              entities.push(new Entity(x * (width  + 1) + 60, y * (height + 1) + 100, 0, 0, char));
          }
      }
  }
  
  function spawn_entity(): void{
      const randomRadian: number = Math.random() * 2 * Math.PI;
      const x: number = Math.cos(randomRadian) * canvas_width;
      const y: number = Math.sin(randomRadian) * canvas_height;
  
      entities.push(new Entity(x, y, x, y, generateRandomCharacter()));
  }
  
  
  setTimeout((): void => {
      spawn_entity();
  }, 1000);
  
  canvas.addEventListener("click", spawn_entity);
  
  let lastTime: number = 0;
  const bounding_rect = new Rectangle(canvas_width / 2, canvas_height / 2, canvas_width, canvas_height);
  let quadTree: QuadTree = QuadTree.create(bounding_rect);
  
  function update(currentTime: number) {
      const deltaTime: number = Math.min((currentTime - lastTime) / 1000, min_frame_rate);
      lastTime = currentTime;
  
      ctx.clearRect(0, 0, canvas_width, canvas_height);
      ctx.reset();
  
      for (const entity of entities) {
          entity.update(deltaTime);
          entity.render(ctx);
      }
  
      quadTree.clear();
  
      for(const entity of entities){
          quadTree.insert(entity.center);
      }
      
      for (const entity of entities) {
          const points: Point[] = quadTree.query(entity.bounding_rect);
          if (points.length === 1) continue;
  
          for (const point of points) {
              const other: Entity = point.userData;
              if (entity.id < other.id) {
                  entity.checkCollision(other);
              }
          }
      }
  
      requestAnimationFrame(update);
  }
  
  requestAnimationFrame((timestamp: number): void => {
      lastTime = timestamp;
      requestAnimationFrame(update);
  });

};