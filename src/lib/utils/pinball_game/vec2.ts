import type {Entity} from "./entity";

export class Vec2 {
    public x: number;
    public y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }


    mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


    unitMut(): this {
        const m: number = this.mag();
        if (m === 0) {
            this.x = 0;
            this.y = 0;
        } else {
            this.x /= m;
            this.y /= m;
        }
        return this;
    }

    normalMut(): this {
        const tx: number = this.x;
        this.x = -this.y;
        this.y = tx;
        return this.unitMut();
    }


    subtrTo(vec: Vec2, out: Vec2): Vec2 {
        out.x = this.x - vec.x;
        out.y = this.y - vec.y;
        return out;
    }

    static dot(v1: Vec2, v2: Vec2): number {
        return v1.x * v2.x + v1.y * v2.y;
    }

    sqDistanceFrom(other: Vec2): number {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return dx * dx + dy * dy;
    }
}

export class Point extends Vec2 {
    public userData: Entity;
    constructor(x: number, y: number, userData: Entity) {
        super(x, y);
        this.userData = userData;
    }
}