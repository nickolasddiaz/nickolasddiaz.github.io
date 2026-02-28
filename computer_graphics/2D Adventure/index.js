const TILE_SIZE = 64;
const INTERVAL = 2 * 1000; // 2 seconds
const POTION_SPAWN_FREQUENCY = 60;
const ENEMY_SPAWN_FREQUENCY = 10;
var COLOR;
(function (COLOR) {
    COLOR["Light_Green"] = "#82c732";
    COLOR["Green"] = "#53ab3d";
    COLOR["Dark_Green"] = "#278141";
    COLOR["Darker_Green"] = "#24653d";
    COLOR["Tree_Trunk"] = "#682c35";
    COLOR["Base_Grey"] = "#4D3833";
    COLOR["Chiseled_Stone"] = "#888C8D";
    COLOR["Health_Light"] = "#cccccc";
    COLOR["Health_Dark"] = "#444444";
    COLOR["High_Health"] = "#29ff52";
    COLOR["Medium_Health"] = "#f4b218";
    COLOR["Low_Health"] = "#fc6cb4";
    COLOR["Loose"] = "#980000";
    COLOR["Win"] = "#FFD700";
})(COLOR || (COLOR = {}));
var SPRITE_TYPE;
(function (SPRITE_TYPE) {
    SPRITE_TYPE[SPRITE_TYPE["PLAYER"] = 0] = "PLAYER";
    SPRITE_TYPE[SPRITE_TYPE["ENEMY_1"] = 1] = "ENEMY_1";
    SPRITE_TYPE[SPRITE_TYPE["ENEMY_2"] = 2] = "ENEMY_2";
    SPRITE_TYPE[SPRITE_TYPE["ENEMY_3"] = 3] = "ENEMY_3";
    SPRITE_TYPE[SPRITE_TYPE["GRASS"] = 4] = "GRASS";
    SPRITE_TYPE[SPRITE_TYPE["WALL"] = 5] = "WALL";
    SPRITE_TYPE[SPRITE_TYPE["TREES"] = 6] = "TREES";
    SPRITE_TYPE[SPRITE_TYPE["HEALTH_POTION"] = 7] = "HEALTH_POTION";
})(SPRITE_TYPE || (SPRITE_TYPE = {}));
class Keybinds {
    UP = new Set(["ArrowUp", "w", "i"]);
    RIGHT = new Set(["ArrowRight", "d", "l"]);
    LEFT = new Set(["ArrowLeft", "a", "j"]);
    DOWN = new Set(["ArrowDown", "s", "k"]);
    RESTART = new Set(["r", "z", "p"]);
}
class GameEntity {
    spriteType;
    constructor(spriteType) {
        this.spriteType = spriteType;
    }
}
class Obstacle extends GameEntity {
    draw(_x, _y) { }
    constructor(spriteType, game) {
        super(spriteType);
        this.draw = game.image_renderer.draw_sprite[spriteType].bind(game.image_renderer);
    }
    update(_x, _y) { }
}
class moveEntity extends GameEntity {
    maxHealth;
    attackBonus;
    defenseBonus;
    damage;
    x;
    y;
    game;
    health;
    other_x;
    other_y;
    constructor(maxHealth, attackBonus, defenseBonus, damage, x, y, game, spriteType) {
        super(spriteType);
        this.maxHealth = maxHealth;
        this.attackBonus = attackBonus;
        this.defenseBonus = defenseBonus;
        this.damage = damage;
        this.x = x;
        this.y = y;
        this.game = game;
        this.health = maxHealth;
        this.other_x = 0;
        this.other_y = 0;
    }
    heal(amount_entity, x, y) {
        this.health += amount_entity.amount_heal;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
        this.game.draw_background(x, y);
        this.move(x, y);
    }
    attack(entity, x, y) {
        if (this.health <= 0) {
            return;
        }
        let died = entity.takeDamage(this.damage);
        if (died) {
            this.game.enemy_count -= 1;
            this.game.draw_background(x, y);
            this.move(x, y); // deletes the entity by moving to it's array
        }
        else {
            this.other_x = x;
            this.other_y = y;
        }
    }
    ;
    damage_calc(damage) {
        return Math.max(damage - this.defenseBonus, 1) * Utils.getRandomInt(1, 6);
    }
    takeDamage(damage) {
        damage = this.damage_calc(damage);
        this.health -= damage;
        this.draw_health_bar(this.x, this.y);
        return this.health <= 0;
    }
    ;
    draw_health_bar(x, y) {
        this.game.image_renderer.draw_health_bar(x, y, Math.max(this.health / this.maxHealth, 0));
    }
    draw(x, y, x_offset = 0, y_offset = 0) {
        this.game.image_renderer.draw_sprite[this.spriteType](x, y);
        this.draw_health_bar(x, y);
    }
    move(newX, newY) {
        this.game.draw_background(this.x, this.y);
        this.game.world.entities[newX][newY] = this.game.world.entities[this.x][this.y];
        this.game.world.entities[this.x][this.y] = null;
        this.draw(newX, newY);
        this.other_x = this.x;
        this.other_y = this.y;
        this.x = newX;
        this.y = newY;
    }
    [Symbol.dispose]() {
        this.game.draw_background(this.x, this.y);
    }
}
class Player extends moveEntity {
    constructor(x, y, game) {
        super(32, 1, 2, 2, x, y, game, SPRITE_TYPE.PLAYER);
    }
    update(x, y) {
        if (this.game.world.entities[x][y] == null) {
            this.move(x, y);
            return;
        }
        switch (this.game.world.entities[x][y].spriteType) {
            case SPRITE_TYPE.ENEMY_1:
            case SPRITE_TYPE.ENEMY_2:
            case SPRITE_TYPE.ENEMY_3:
                {
                    this.attack(this.game.world.entities[x][y], x, y);
                }
                break;
            case SPRITE_TYPE.HEALTH_POTION:
                {
                    this.heal(this.game.world.entities[x][y], x, y);
                }
                break;
            case SPRITE_TYPE.TREES | SPRITE_TYPE.WALL: {
            }
        }
    }
}
class Enemy extends moveEntity {
    last_time;
    seen_player;
    constructor(x, y, game, sprite) {
        super(10, 1, 1, 2, x, y, game, sprite);
        this.last_time = 0;
        this.seen_player = false;
    }
    update(x, y) {
        if (this.game.lastTime == this.last_time)
            return;
        this.last_time = this.game.lastTime; // prevent double processing
        let options = [];
        for (let [i, j] of [[1, 0], [0, 1], [-1, 0], [0, -1]].values()) {
            if (this.game.world.entities[x + i][y + j] == null) {
                options.push([x + i, y + j]);
            }
            else if (this.game.world.entities[x + i][y + j].spriteType == SPRITE_TYPE.PLAYER) {
                if (this.seen_player) {
                    this.attack(this.game.world.entities[x + i][y + j], x + i, y + j);
                }
                else {
                    this.seen_player = true;
                }
                return;
            }
        }
        this.seen_player = false;
        if (options.length > 0) {
            const [newX, newY] = Utils.getRandomElement(options);
            this.move(newX, newY);
        }
    }
}
class HealthPotion extends GameEntity {
    draw(_x, _y) { }
    amount_heal;
    constructor(game) {
        super(SPRITE_TYPE.HEALTH_POTION);
        this.amount_heal = 16;
        this.draw = game.image_renderer.draw_sprite[this.spriteType].bind(game.image_renderer);
    }
    update(_x, _y) { }
}
class ImagesRenderer {
    ctx;
    draw_sprite;
    constructor(ctx) {
        this.ctx = ctx;
        this.draw_sprite = {
            [SPRITE_TYPE.PLAYER]: this.draw_player.bind(this),
            [SPRITE_TYPE.ENEMY_1]: this.draw_enemy_1.bind(this),
            [SPRITE_TYPE.ENEMY_2]: this.draw_enemy_2.bind(this),
            [SPRITE_TYPE.ENEMY_3]: this.draw_enemy_3.bind(this),
            [SPRITE_TYPE.WALL]: this.draw_wall.bind(this),
            [SPRITE_TYPE.HEALTH_POTION]: this.draw_health_potion.bind(this),
            [SPRITE_TYPE.GRASS]: this.draw_grass.bind(this),
            [SPRITE_TYPE.TREES]: this.draw_tree.bind(this),
        };
    }
    draw_player(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("player"), x, y, x_offset, y_offset);
    }
    draw_health_potion(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("health_potion"), x, y, x_offset, y_offset);
    }
    draw_grass(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("grass"), x, y, x_offset, y_offset);
    }
    draw_enemy_3(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("enemy_3"), x, y, x_offset, y_offset);
    }
    draw_enemy_2(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("enemy_2"), x, y, x_offset, y_offset);
    }
    draw_enemy_1(x, y, x_offset = 0, y_offset = 0) {
        this.drawHtmlImage(document.getElementById("enemy_1"), x, y, x_offset, y_offset);
    }
    draw_loose() {
        this.ctx.font = "30px BlinkMacSystemFont";
        this.ctx.fillStyle = COLOR.Loose;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("You LOOSE (skill issue) 😂: press r to restart looser 🤣", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
    draw_win() {
        this.ctx.font = "30px BlinkMacSystemFont";
        this.ctx.fillStyle = COLOR.Win;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("You WIN 🏆: press r to restart 👍", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
    draw_health_bar(x, y, percent_health, x_offset = 0, y_offset = 0) {
        x = x * TILE_SIZE + x_offset;
        y = y * TILE_SIZE + y_offset;
        let temp = TILE_SIZE / 4;
        let x_width = TILE_SIZE - temp * 2;
        let x_start = x + temp;
        let y_width = TILE_SIZE / 16;
        let y_start = y + TILE_SIZE - temp + y_width;
        const health_x = Math.floor(x_width * percent_health);
        this.ctx.fillStyle = COLOR.Health_Light;
        this.ctx.fillRect(x_start + health_x, y_start, x_width - health_x, y_width);
        const gradient = this.ctx.createLinearGradient(x_start, 0, x_start + x_width, 0);
        gradient.addColorStop(0, COLOR.Low_Health);
        gradient.addColorStop(0.5, COLOR.Medium_Health);
        gradient.addColorStop(1, COLOR.High_Health);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(x_start, y_start, health_x, y_width);
        this.ctx.strokeStyle = COLOR.Health_Dark;
        this.ctx.strokeRect(x_start, y_start, x_width, y_width);
    }
    draw_wall(x, y, x_offset = 0, y_offset = 0) {
        this.ctx.fillStyle = COLOR.Chiseled_Stone;
        let start_x = x * TILE_SIZE + TILE_SIZE / 4 + x_offset;
        let start_y = y * TILE_SIZE + y_offset;
        this.ctx.fillRect(start_x, start_y, TILE_SIZE / 2, TILE_SIZE);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = COLOR.Base_Grey;
        let x_size = x * TILE_SIZE + TILE_SIZE / 4;
        let x_inc = TILE_SIZE / 8;
        let x_end = x_size + TILE_SIZE / 2 - x_inc;
        let y_size = y * TILE_SIZE;
        let y_inc = TILE_SIZE / 4;
        let y_end = y_size + TILE_SIZE - y_inc;
        let shift = true;
        for (let x = x_size; x <= x_end; x += x_inc) {
            let t = y_size;
            if (shift) {
                shift = false;
                t += y_inc / 2;
            }
            else {
                shift = true;
            }
            for (let y = t; y <= y_end; y += y_inc) {
                this.ctx.strokeRect(x, y, x_inc, y_inc);
            }
        }
        this.ctx.beginPath();
        this.ctx.moveTo(start_x, start_y);
        this.ctx.lineTo(start_x, start_y + TILE_SIZE);
        this.ctx.stroke();
    }
    draw_tree(x, y, x_offset = 0, y_offset = 0) {
        this.draw_tree_helper(x, y, x_offset, -TILE_SIZE / 4 + y_offset);
        this.draw_tree_helper(x, y, TILE_SIZE / 4 + x_offset, -TILE_SIZE / 8 + y_offset);
        this.draw_tree_helper(x, y, -TILE_SIZE / 4 + x_offset, -TILE_SIZE / 8 + y_offset);
        this.draw_tree_helper(x, y, x_offset, 0);
    }
    draw_tree_helper(x, y, x_offset, y_offset) {
        let centerX = x * TILE_SIZE + TILE_SIZE / 2 + x_offset;
        let topY = y * TILE_SIZE + y_offset;
        let paddingY = TILE_SIZE / 4;
        let levelY = TILE_SIZE / 8;
        let levelX = TILE_SIZE / 16;
        let levelY_1 = topY + paddingY;
        this.ctx.fillStyle = COLOR.Light_Green;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, levelY_1);
        let prev_x = centerX - levelX;
        let prev_x_2 = centerX + levelX;
        let prev_y = levelY_1 + levelY;
        this.ctx.lineTo(prev_x, prev_y);
        this.ctx.lineTo(prev_x_2, prev_y);
        this.ctx.closePath();
        this.ctx.fill();
        for (const value of [COLOR.Green, COLOR.Dark_Green, COLOR.Darker_Green].values()) {
            this.ctx.fillStyle = value;
            this.ctx.beginPath();
            this.ctx.moveTo(prev_x, prev_y);
            this.ctx.lineTo(prev_x_2, prev_y);
            prev_x = prev_x - levelX;
            prev_x_2 = prev_x_2 + levelX;
            prev_y = prev_y + levelY;
            this.ctx.lineTo(prev_x_2, prev_y);
            this.ctx.lineTo(prev_x, prev_y);
            this.ctx.closePath();
            this.ctx.fill();
        }
        this.ctx.fillStyle = COLOR.Tree_Trunk;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - levelX, prev_y);
        this.ctx.lineTo(centerX + levelX, prev_y);
        this.ctx.lineTo(centerX + levelY, prev_y + levelY);
        this.ctx.lineTo(centerX - levelY, prev_y + levelY);
        this.ctx.closePath();
        this.ctx.fill();
    }
    drawHtmlImage(pic, x, y, x_offset = 0, y_offset = 0) {
        this.ctx.drawImage(pic, x * TILE_SIZE + x_offset, y * TILE_SIZE + y_offset, TILE_SIZE, TILE_SIZE);
    }
}
export class Game {
    width;
    height;
    canvas;
    image_renderer;
    world;
    draw_background;
    lastTime;
    accumulatedTime;
    player;
    keybinds;
    paused = false;
    enemy_count;
    animationFrameId = null;
    constructor(main_element, rows = 23, cols = 9) {
        this.keybinds = new Keybinds();
        this.canvas = document.createElement("canvas");
        this.canvas.width = rows * TILE_SIZE;
        this.canvas.height = cols * TILE_SIZE;
        this.image_renderer = new ImagesRenderer(this.canvas.getContext("2d"));
        main_element.appendChild(this.canvas);
        this.canvas.setAttribute('tabindex', '0');
        this.canvas.focus();
        this.width = rows;
        this.height = cols;
        this.lastTime = 0;
        this.accumulatedTime = 0;
        this.draw_background = this.image_renderer.draw_sprite[SPRITE_TYPE.GRASS];
        this.world = new WorldBuilder(this.width, this.height, this);
        this.enemy_count = 0;
        this.player = new Player(1, 1, this);
        this.restart();
        this.addPlayerListener();
    }
    restart() {
        this.stop();
        this.paused = false;
        this.enemy_count = 0;
        this.world.starting_area(this);
        this.player = new Player(1, 1, this);
        this.world.entities[1][1] = this.player;
        this.spawnEnemies();
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.draw_background(x, y);
            }
        }
        for (const { x, y, entity } of this.worldGenerator()) {
            entity.draw(x, y);
        }
        this.run_game();
    }
    stop() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }
    addPlayerListener() {
        this.canvas.addEventListener('keydown', (event) => {
            if (this.keybinds.RESTART.has(event.key)) {
                this.restart();
                return;
            }
            if (this.paused) {
                return;
            }
            if (this.keybinds.UP.has(event.key)) {
                this.player.update(this.player.x, this.player.y - 1);
            }
            else if (this.keybinds.DOWN.has(event.key)) {
                this.player.update(this.player.x, this.player.y + 1);
            }
            else if (this.keybinds.LEFT.has(event.key)) {
                this.player.update(this.player.x - 1, this.player.y);
            }
            else if (this.keybinds.RIGHT.has(event.key)) {
                this.player.update(this.player.x + 1, this.player.y);
            }
            this.updateGame(0);
        });
    }
    // generator for this.world
    // for (const { x, y, entity } of this.worldGenerator()) {
    *worldGenerator() {
        for (const [x, arr] of this.world.entities.entries()) {
            for (const [y, entity] of arr.entries()) {
                if (entity != null)
                    yield { x, y, entity };
            }
        }
    }
    run_game() {
        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }
    playWin() {
        this.paused = true;
        this.image_renderer.draw_win();
    }
    playLoss() {
        this.paused = true;
        this.image_renderer.draw_loose();
    }
    gameLoop(timestamp) {
        if (this.paused) {
            return;
        }
        else if (this.player.health <= 0) {
            this.playLoss();
        }
        else if (this.enemy_count <= 0) {
            this.playWin();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
        if (this.lastTime === 0) {
            this.lastTime = timestamp;
        }
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        this.accumulatedTime += deltaTime;
        if (this.accumulatedTime >= INTERVAL) {
            this.updateGame(deltaTime);
            this.accumulatedTime -= INTERVAL;
            this.accumulatedTime = Math.min(INTERVAL, this.accumulatedTime);
        }
    }
    updateGame(_deltaTime) {
        this.accumulatedTime = 0;
        for (const { x, y, entity } of this.worldGenerator()) {
            entity.update(x, y);
        }
    }
    spawnEnemies() {
        let area = (this.width - 2) * (this.height - 2);
        let enemyCount = area / ENEMY_SPAWN_FREQUENCY;
        let potionCount = area / POTION_SPAWN_FREQUENCY;
        for (let i = 0; i < enemyCount; i++) {
            let x = Utils.getRandomInt(1, this.width - 1);
            let y = Utils.getRandomInt(1, this.height - 1);
            if (this.world.entities[x][y] == null) {
                if (potionCount > 0) {
                    potionCount -= 1;
                    this.world.entities[x][y] = new HealthPotion(this);
                }
                else {
                    this.world.entities[x][y] = new Enemy(x, y, this, SPRITE_TYPE.ENEMY_1 + Utils.getRandomInt(0, 2));
                    this.enemy_count += 1;
                }
            }
        }
    }
}
class WorldBuilder {
    width;
    height;
    entities;
    constructor(rows = 23, cols = 9, game) {
        this.width = rows;
        this.height = cols;
        this.entities = Array.from({ length: rows }, () => new Array(cols).fill(null));
    }
    starting_area(game) {
        this.entities = Array.from({ length: this.width }, () => new Array(this.height).fill(null));
        for (let x = 1; x < this.width - 1; x++) {
            this.entities[x][0] = new Obstacle(SPRITE_TYPE.TREES, game);
            this.entities[x][this.height - 1] = new Obstacle(SPRITE_TYPE.TREES, game);
        }
        for (let y = 1; y < this.height - 1; y++) {
            this.entities[0][y] = new Obstacle(SPRITE_TYPE.TREES, game);
            this.entities[this.width - 1][y] = new Obstacle(SPRITE_TYPE.TREES, game);
        }
        this.entities[0][0] = new Obstacle(SPRITE_TYPE.TREES, game);
        this.entities[this.width - 1][0] = new Obstacle(SPRITE_TYPE.TREES, game);
        this.entities[0][this.height - 1] = new Obstacle(SPRITE_TYPE.TREES, game);
        this.entities[this.width - 1][this.height - 1] = new Obstacle(SPRITE_TYPE.TREES, game);
        this.maze_generation(game);
    }
    maze_generation(game) {
        for (let x = 2; x < this.width - 2; x += Utils.getRandomInt(3, 5)) {
            let t = 1;
            let bottom = this.height - 1;
            if (x % 2) {
                t += 1;
            }
            else {
                bottom -= 1;
            }
            for (let y = t; y < bottom; y++) {
                this.entities[x][y] = new Obstacle(SPRITE_TYPE.WALL, game);
            }
        }
    }
}
class Utils {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
}
