import { Vec2, Point } from './vec2.js';
import {
    height, width, max_side,
    mass, inv_inertia,
    canvas_width, canvas_height, elasticity, charCache
} from './const.js';
import { Rectangle } from './quadtree.js';

let id: number = 0;
const _tmp0: Vec2 = new Vec2();

// SAP Theorem
// https://github.com/danielszabo88/mocorgo/blob/master/15%20-%20Separating%20Axis%20Theorem/script.js

// Minimum Translation Vector
// https://github.com/danielszabo88/mocorgo/blob/master/16%20-%20Minimum%20Translation%20Vector/script.js

// Rotational Collision
// https://github.com/danielszabo88/mocorgo/blob/master/14%20-%20Rotational%20Collision/script.js

type Vec2_4 = [Vec2, Vec2, Vec2, Vec2];

export class Entity {
    _projMin = 0;
    _projMax = 0;
    private readonly char: string;
    private pos: Vec2;
    private vel: Vec2;
    private ang: number;
    private angVel: number;
    public id: number;
    center: Point;
    bounding_rect: Rectangle;
    private readonly vertex: Vec2_4;
    private readonly _axes: Vec2_4;
    constructor(posX: number, posY: number, velX: number, velY: number, char: string) {
        this.char = char;
        this.pos = new Vec2(posX, posY);
        this.vel = new Vec2(velX, velY);

        this.ang = 0;
        this.angVel = 0;
        id += 1;
        this.id = id;
        this.center = new Point(0, 0, this);
        this.bounding_rect = new Rectangle(0, 0, 0, 0);

        this.vertex = [
            new Vec2(this.pos.x, this.pos.y),
            new Vec2(this.pos.x + width, this.pos.y),
            new Vec2(this.pos.x + width, this.pos.y + height),
            new Vec2(this.pos.x, this.pos.y + height),
        ];

        this._axes = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];

        this.set_vertex();
    }

    render(ctx: CanvasRenderingContext2D): void {
        const sprite: OffscreenCanvas = charCache.get(this.char)!;
        const cos: number = Math.cos(this.ang);
        const sin: number = Math.sin(this.ang);

        ctx.setTransform(cos, sin, -sin, cos, this.pos.x, this.center.y);
        ctx.drawImage(sprite, -sprite.width / 2, -sprite.height / 2);
    }

    set_vertex(): void {
        this.center.x = this.pos.x + width / 2;
        this.center.y = this.pos.y + height / 2;

        const cosA: number = Math.cos(this.ang);
        const sinA: number = Math.sin(this.ang);
        const cx: number = this.center.x;
        const cy: number = this.center.y;

        const rotatePoint = (x: number, y: number, index: number): void => {
            const dx: number = x - cx;
            const dy: number = y - cy;
            this.vertex[index]!.x = dx * cosA - dy * sinA + cx;
            this.vertex[index]!.y = dx * sinA + dy * cosA + cy;
        };

        rotatePoint(this.pos.x, this.pos.y, 0);
        rotatePoint(this.pos.x + width, this.pos.y, 1);
        rotatePoint(this.pos.x + width, this.pos.y + height, 2);
        rotatePoint(this.pos.x, this.pos.y + height, 3);
    }

    update(deltaTime: number): void {
        if (this.pos.x > canvas_width - width) {
            this.vel.x = -Math.abs(this.vel.x);
        } else if (this.pos.x < 0) {
            this.vel.x = Math.abs(this.vel.x);
        }

        if (this.pos.y > canvas_height) {
            this.vel.y = -Math.abs(this.vel.y);
        } else if (this.pos.y < 0) {
            this.vel.y = Math.abs(this.vel.y);
        }

        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;

        this.ang += this.angVel * deltaTime;
        this.ang %= (Math.PI * 2);

        this.set_vertex();
        this.set_bounding_rect();
    }

    set_bounding_rect(): void {
        this.bounding_rect.set_rect(
            this.center.x,
            this.center.y,
            max_side * 2,
            max_side * 2
        );
    }

    //Compute 4 SAT axes into pre-allocated this._axes and rectB._axes.
    _computeAxes(rectB: Entity): void {
        const a = this.vertex;
        const b = rectB.vertex;

        const ax0 = this._axes[0];
        const ax1 = this._axes[1];
        const ax2 = rectB._axes[0];
        const ax3 = rectB._axes[1];

        a[1].subtrTo(a[0], ax0);
        ax0.normalMut();

        a[2].subtrTo(a[1], ax1);
        ax1.normalMut();

        b[1].subtrTo(b[0], ax2);
        ax2.normalMut();

        b[2].subtrTo(b[1], ax3);
        ax3.normalMut();
    }

    checkCollision(rectB: Entity): void {
        if (!this.bounding_rect.intersects(rectB.bounding_rect)) return;

        // passed AABB detection
        // starting SAP detection

        this._computeAxes(rectB);

        const axes: Vec2_4 = [this._axes[0], this._axes[1], rectB._axes[0], rectB._axes[1]];

        let minOverlap: number = Infinity;
        let mtvAxisX = 0, mtvAxisY = 0;
        let foundAxis = false;

        for (let i: number = 0; i < 4; i++) {
            const axis: Vec2 = axes[i]!;

            if (axis.x === 0 && axis.y === 0) continue;

            this.projectInto(axis);
            rectB.projectInto(axis);

            if (this._projMax < rectB._projMin || rectB._projMax < this._projMin) {
                return;
            }

            // shapes collided
            // collision resolution of the shapes
            // getting the Minimum Translation Vector

            const overlap: number = Math.min(this._projMax, rectB._projMax)
                        - Math.max(this._projMin, rectB._projMin);


            if (overlap < minOverlap) {
                minOverlap = overlap;
                mtvAxisX = axis.x;
                mtvAxisY = axis.y;
                foundAxis = true;
            }
        }

        if (!foundAxis || !isFinite(minOverlap)) return;

        this.pos.subtrTo(rectB.pos, _tmp0);
        if (_tmp0.x * mtvAxisX + _tmp0.y * mtvAxisY < 0) {
            mtvAxisX = -mtvAxisX;
            mtvAxisY = -mtvAxisY;
        }

        const mtvX: number = mtvAxisX * minOverlap;
        const mtvY: number = mtvAxisY * minOverlap;

        // getting rotational collision

        // collision normal

        const normalX: number = mtvAxisX;
        const normalY: number = mtvAxisY;

        // closing velocity
        let bestDist: number = -Infinity;
        let contactX: number = 0, contactY: number = 0;
        for (const v of rectB.vertex) {
            const dist = mtvAxisX * v.x + mtvAxisY * v.y;
            if (dist > bestDist) {
                bestDist = dist;
                contactX = v.x;
                contactY = v.y;
            }
        }

        const collArm1X: number = contactX - this.center.x;
        const collArm1Y: number = contactY - this.center.y;

        const collArm2X: number = contactX - rectB.center.x;
        const collArm2Y: number = contactY - rectB.center.y;

        const rotVel1X: number = -this.angVel * collArm1Y;
        const rotVel1Y: number =  this.angVel * collArm1X;

        const rotVel2X: number = -rectB.angVel * collArm2Y;
        const rotVel2Y: number =  rectB.angVel * collArm2X;

        const closVel1X: number = this.vel.x + rotVel1X;
        const closVel1Y: number = this.vel.y + rotVel1Y;

        const closVel2X: number = rectB.vel.x + rotVel2X;
        const closVel2Y: number = rectB.vel.y + rotVel2Y;


        // impulse augmentation
        let impAug1: number = collArm1X * normalY - collArm1Y * normalX;
        impAug1 = impAug1 * impAug1 * inv_inertia;

        let impAug2: number = collArm2X * normalY - collArm2Y * normalX;
        impAug2 = impAug2 * impAug2 * inv_inertia;

        // final impulse
        const relVelX: number = closVel1X - closVel2X;
        const relVelY: number = closVel1Y - closVel2Y;
        const sepVel: number = relVelX * normalX + relVelY * normalY;
        const new_sepVel: number = -sepVel * elasticity;
        const vsep_diff: number = new_sepVel - sepVel;

        const impulse: number = vsep_diff / (2 * mass + impAug1 + impAug2);
        const impulseX: number = normalX * impulse;
        const impulseY: number = normalY * impulse;

        // apply the velocities
        this.vel.x += impulseX;
        this.vel.y += impulseY;
        rectB.vel.x -= impulseX;
        rectB.vel.y -= impulseY;

        this.angVel  += inv_inertia * (collArm1X * impulseY - collArm1Y * impulseX);
        rectB.angVel -= inv_inertia * (collArm2X * impulseY - collArm2Y * impulseX);

        // move the positions back so they are not touching
        const halfMtvX: number = mtvX * 0.5;
        const halfMtvY: number = mtvY * 0.5;
        this.pos.x += halfMtvX;
        this.pos.y += halfMtvY;
        rectB.pos.x -= halfMtvX;
        rectB.pos.y -= halfMtvY;
    }

    projectInto(axis: Vec2): void {
        let min: number = Vec2.dot(axis, this.vertex[0]);
        let max: number = min;
        for (let i: number = 1; i < this.vertex.length; i++) {
            const p: number = Vec2.dot(axis, this.vertex[i]!);
            if (p < min) min = p;
            if (p > max) max = p;
        }
        this._projMin = min;
        this._projMax = max;
    }
}