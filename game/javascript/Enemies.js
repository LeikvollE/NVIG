class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get texture() {
        return null;
    }

    move(delta) {
        return;
    }
}

class Enemy extends Entity {
    constructor(x, y) {
        super(x, y);
        this.speed = 1;
        this.direction = 1;
    }

    move(delta) {
        if (tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+this.speed*this.direction, this.y+25).solid)) {
            this.direction*=-1;
        }
        if (tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+20+this.speed*this.direction, this.y+25).solid)) {
            this.direction*=-1;
        }
        this.x+=this.speed*this.direction;
    }

    checkCollision() {
        if ((player.xPos <= this.x+20 && this.x <= player.xPos+20) && (player.yPos <= this.y+20 && this.y <= player.yPos+20)) {
           score.red = 0;
           score.blue = 0;
           score.yellow = 0;
        }
    }
}

class spainEnemy extends Enemy {
    constructor(x, y) {
        super(x, y);
    }

    get texture() {
        return "game/img/player/SpainEnemy.png";
    }
}

class Boss extends Enemy {
    constructor(x, y, health) {
        super(x, y);
        this.initX = x;
        this.initY = y;
        this.ySpeed = 0;
    }

    move(delta) {
        if (tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+this.speed*this.direction, this.y+45).solid)) {
            this.direction*=-1;
        }
        if (tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+20+this.speed*this.direction, this.y+45).solid)) {
            this.direction*=-1;
        }
        this.x+=this.speed*this.direction;
    }

    checkCollision() {
        if ((player.xPos <= this.x+20 && this.x <= player.xPos+20) && (player.yPos <= this.y+20 && this.y <= player.yPos+20)) {
            running = false;
            this.x = this.initX;
            this.y = this.initY;
            player.xPos = player.xStart;
            player.yPos = player.yStart;
            player.ySpeed = 0;
            setTimeout(function () {
                resumeGame();
            },1000);
        }
    }

}

class nepalBoss extends Boss {
    constructor(x, y, health) {
        super(x,y,health);
        this.speed = 0.5;
    }

    move(delta) {

        if (this.y > map[0].length*21) {
            running = false;
            setTimeout(nextLevel, 1000);
        }

        if (player.xPos - this.x > 0) {
            this.direction = 1;
        } else {
            this.direction = -1;
        }
        if (Math.abs(player.xPos - this.x) > 20) {
            this.x += this.speed * this.direction;
        } else if (Math.abs(player.xPos - this.x) > 5) {
            this.x += this.speed*this.direction*(1 / (1 + Math.pow(Math.exp(1), (4 - Math.abs(this.x-player.xPos) / 2.5)))); //1 / (1 + e^(4 - x / 2.5))
        }

        this.ySpeed += player.gravity*delta;

        if (tileAtScreenPos(this.x, this.y+this.ySpeed+40).solid ||
            tileAtScreenPos(this.x, this.y+this.ySpeed).solid ||
            tileAtScreenPos(this.x+20, this.y+this.ySpeed+40).solid ||
            tileAtScreenPos(this.x+20, this.y+this.ySpeed).solid) {
            this.ySpeed = 0;
        } else {
            this.y += this.ySpeed;
        }

    }

    get texture() {
        if (this.direction == -1) return "game/img/player/nepalBossR.png";
        return "game/img/player/nepalBoss.png";
    }
}