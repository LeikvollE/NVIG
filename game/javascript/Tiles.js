class Tile {
    constructor(x, y) {
        this.solid = false;
        this.x = x;
        this.y = y;
    }

    onCollide() {
        return;
    }

    get texture() {
        return null;
    }
}

class grassTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.solid = true;

    }

    get texture() {
        if (this.y > 0 && map[this.x][this.y-1] instanceof grassTile) {
            return [2, 5];
        } else if (this.x > 0 && !(map[this.x-1][this.y] instanceof grassTile)) {
            return [2, 4];
        } else if (this.x < (map.length - 1) && !(map[this.x+1][this.y] instanceof grassTile)) {
            return [4, 4];
        }

        return [3, 4];
    }
}

class grassSnowTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.solid = true;

    }

    get texture() {
        if (this.y > 0 && map[this.x][this.y-1] instanceof grassSnowTile) {
            return [2, 1];
        } else if (this.x > 0 && !(map[this.x-1][this.y] instanceof grassSnowTile)) {
            return [2, 0];
        } else if (this.x < (map.length - 1) && !(map[this.x+1][this.y] instanceof grassSnowTile)) {
            return [4, 0];
        }

        return [3, 0];
    }
}

class bridgeTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.solid = true;

    }

    get texture() {
        return [13,1];
    }
}

class FlagTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.frame = 0;
        this.frameCounter = 0;
    }

}

class redFlagTile extends FlagTile {
    constructor(x, y) {
        super(x, y);
        this.textures = [[12, 10],[12, 11]];
    }

    get texture() {
        this.frameCounter++;
        if (this.frameCounter > 20){
            this.frameCounter = 0;
            if (this.frame==0) this.frame = 1;
            else this.frame = 0;
        }
        if (score.red > 0) {
            return [14, 11]
        } else {
            return this.textures[this.frame];
        }
    }

    onCollide() {
        if (score.red <= 0) {
            score.red = 1;
        }
    }
}

class blueFlagTile extends FlagTile {
    constructor(x, y) {
        super(x, y);
        this.textures = [[13, 10],[13, 11]];
    }

    get texture() {
        this.frameCounter++;
        if (this.frameCounter > 20){
            this.frameCounter = 0;
            if (this.frame==0) this.frame = 1;
            else this.frame = 0;
        }
        if (score.blue > 0) {
            return [15, 11]
        } else {
            return this.textures[this.frame];
        }
    }

    onCollide() {
        if (score.blue <= 0) {
            score.blue = 1;
        }
    }
}

class yellowFlagTile extends FlagTile {
    constructor(x, y) {
        super(x, y);
        this.textures = [[10, 10],[10, 11]];
    }

    get texture() {
        this.frameCounter++;
        if (this.frameCounter > 20){
            this.frameCounter = 0;
            if (this.frame==0) this.frame = 1;
            else this.frame = 0;
        }
        if (score.yellow > 0) {
            return [14, 10]
        } else {
            return this.textures[this.frame];
        }
    }

    onCollide() {
        if (score.yellow <= 0) {
            score.yellow = 1;
        }
    }
}

class poleTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.hasCollided = false;
    }

    get texture() {
        return [12, 9]
    }

    onCollide() {
        if (score.yellow >= score.goalYellow && score.blue >= score.goalBlue && score.red >= score.goalRed && !this.hasCollided) {
            this.hasCollided = true;
            running = false;
            let x = this.x;
            let y = this.y;
            //mainAudio.play();
            movePlayerToPoint(x*21+5,y*21, 2, function () {
                movePlayerToPoint(x*21+5, y*21-40, 1, function () {
                    setTimeout(nextLevel, 1000);
                })
            });
        }
    }
}

class poleMiddleTile extends Tile {
    constructor(x, y) {
        super(x, y);
    }

    get texture() {
        return [12, 9]
    }
}

class poleTopTile extends Tile {
    constructor(x, y) {
        super(x, y);
    }

    get texture() {
        return [11, 9]
    }
}


