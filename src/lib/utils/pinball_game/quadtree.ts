// Quadtree
// https://github.com/CodingTrain/QuadTree/blob/main/quadtree.js

import {DEFAULT_CAPACITY, MAX_DEPTH} from './const.js';
import type {Point} from "./vec2";

type Quadrant = number;

const top_left: Quadrant = 0;
const top_right: Quadrant = 1;
const bottom_left: Quadrant = 2;
const bottom_right: Quadrant = 3;

export class Rectangle {
    private x!: number;
    private y!: number;
    private w!: number;
    private h!: number;
    private left!: number;
    private right!: number;
    private top!: number;
    private bottom!: number;
    constructor(x: number, y: number, w: number, h: number) {
        this.set_rect(x, y, w, h);
    }

    set_rect(x: number, y: number, w: number, h: number): void{
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.left = x - w / 2;
        this.right = x + w / 2;
        this.top = y - h / 2;
        this.bottom = y + h / 2;
    }

    contains(point: Point): boolean {
        return (
            this.left <= point.x && point.x <= this.right &&
            this.top <= point.y && point.y <= this.bottom
        );
    }

    intersects(range: Rectangle): boolean {
        return !(
            this.right < range.left || range.right < this.left ||
            this.bottom < range.top || range.bottom < this.top
        );
    }

    subdivide(quadrant: Quadrant): Rectangle {
        switch (quadrant) {
            case top_left:
                return new Rectangle(this.x + this.w / 4, this.y - this.h / 4, this.w / 2, this.h / 2);
            case top_right:
                return new Rectangle(this.x - this.w / 4, this.y - this.h / 4, this.w / 2, this.h / 2);
            case bottom_left:
                return new Rectangle(this.x + this.w / 4, this.y + this.h / 4, this.w / 2, this.h / 2);
            case bottom_right:
                return new Rectangle(this.x - this.w / 4, this.y + this.h / 4, this.w / 2, this.h / 2);
            default:
                throw new Error(`Invalid quadrant: ${quadrant}`);
        }
    }

    xDistanceFrom(point: Point): number {
        if (this.left <= point.x && point.x <= this.right) {
            return 0;
        }

        return Math.min(
            Math.abs(point.x - this.left),
            Math.abs(point.x - this.right)
        );
    }

    yDistanceFrom(point: Point): number {
        if (this.top <= point.y && point.y <= this.bottom) {
            return 0;
        }

        return Math.min(
            Math.abs(point.y - this.top),
            Math.abs(point.y - this.bottom)
        );
    }

    // Skips Math.sqrt for faster comparisons
    sqDistanceFrom(point: Point): number {
        const dx = this.xDistanceFrom(point);
        const dy = this.yDistanceFrom(point);

        return dx * dx + dy * dy;
    }
}

export class QuadTree {
    private boundary: Rectangle;
    private capacity: number;
    private points: Point[];
    private divided: boolean;
    private depth: number;
    private top_left?: QuadTree;
    private top_right?: QuadTree;
    private bottom_left?: QuadTree;
    private bottom_right?: QuadTree;
    constructor(boundary: Rectangle, capacity: number = DEFAULT_CAPACITY, _depth = 0) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;

        this.depth = _depth;
    }

    get children(): (QuadTree | undefined)[] {
        if (this.divided) {
            return [
                this.top_left,
                this.top_right,
                this.bottom_left,
                this.bottom_right
            ];
        } else {
            return [];
        }
    }

    clear(): void {
        this.points = [];

        if (this.divided) {
            this.divided = false;
            delete this.top_right;
            delete this.top_left;
            delete this.bottom_right;
            delete this.bottom_left;
        }
    }

    static create(rect: Rectangle): QuadTree {
        return new QuadTree(rect);
    }

    subdivide(): void {
        this.top_left = new QuadTree(this.boundary.subdivide(top_left), this.capacity, this.depth + 1);
        this.top_right = new QuadTree(this.boundary.subdivide(top_right), this.capacity, this.depth + 1);
        this.bottom_left = new QuadTree(this.boundary.subdivide(bottom_left), this.capacity, this.depth + 1);
        this.bottom_right = new QuadTree(this.boundary.subdivide(bottom_right), this.capacity, this.depth + 1);

        this.divided = true;

        // Move points to children.
        // This improves performance by placing points
        // in the smallest available rectangle.
        for (const p of this.points) {
            const inserted =
                this.top_left.insert(p) ||
                this.top_right.insert(p) ||
                this.bottom_left.insert(p) ||
                this.bottom_right.insert(p);

            if (!inserted) {
                throw RangeError('capacity must be greater than 0');
            }
        }

    }

    insert(point: Point): boolean {
        if (!this.boundary.contains(point)) {
            return false;
        }

        if (!this.divided) {
            if (
                this.points.length < this.capacity ||
                this.depth === MAX_DEPTH
            ) {
                this.points.push(point);
                return true;
            }

            this.subdivide();
        }

        return (
            this.top_left!.insert(point) ||
            this.top_right!.insert(point) ||
            this.bottom_left!.insert(point) ||
            this.bottom_right!.insert(point)
        );
    }

    query(range: Rectangle, found: Point[] = []): Point[] {
        if (!range.intersects(this.boundary)) {
            return found;
        }

        if (this.divided) {
            this.top_right!.query(range, found);
            this.top_left!.query(range, found);
            this.bottom_right!.query(range, found);
            this.bottom_left!.query(range, found);
            return found;
        }

        for (const p of this.points) {
            if (range.contains(p)) {
                found.push(p);
            }
        }

        return found;
    }

    kNearest(searchPoint: Point, maxCount: number, sqMaxDistance: number, furthestSqDistance: number, foundSoFar: number) {
        let found: Point[] = [];

        if (this.divided) {
            this.children
                .sort((a, b) => a!.boundary.sqDistanceFrom(searchPoint) - b!.boundary.sqDistanceFrom(searchPoint))
                .forEach((child) => {
                    const sqDistance = child!.boundary.sqDistanceFrom(searchPoint);
                    if (foundSoFar < maxCount || sqDistance < furthestSqDistance) {
                        const result = child!.kNearest(searchPoint, maxCount, sqMaxDistance, furthestSqDistance, foundSoFar);
                        const childPoints = result.found;
                        found = found.concat(childPoints);
                        foundSoFar += childPoints.length;
                        furthestSqDistance = result.furthestSqDistance;
                    }
                });
        } else {
            this.points
                .sort((a, b) => a.sqDistanceFrom(searchPoint) - b.sqDistanceFrom(searchPoint))
                .forEach((p) => {
                    const sqDistance = p.sqDistanceFrom(searchPoint);
                    if (foundSoFar < maxCount || sqDistance < furthestSqDistance) {
                        found.push(p);
                        furthestSqDistance = Math.max(sqDistance, furthestSqDistance);
                        foundSoFar++;
                    }
                });
        }

        return {
            found: found.sort((a, b) => a.sqDistanceFrom(searchPoint) - b.sqDistanceFrom(searchPoint)).slice(0, maxCount),
            furthestSqDistance: Math.sqrt(furthestSqDistance),
        };
    }

    get length(): number {
        if (this.divided) {
            return (
                this.top_right!.length +
                this.top_left!.length +
                this.bottom_right!.length +
                this.bottom_left!.length
            );
        }

        return this.points.length;
    }
}