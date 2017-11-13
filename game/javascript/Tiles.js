// Filnavn: Tiles.js
// Skrevet av: Eirik leikvoll
// Når: Oktober 2017
// Mening: Definerer tilsene i spillet.

// Definisjon av en helt enkel tile.
class Tile {
    constructor(x, y) {
        this.solid = false;
        this.x = x;
        this.y = y;
    }

    // Funlsjon som skal kalles når spilleren kolliderer med tilen.
    onCollide() {
        return;
    }

    // Skal returnere posisjonen til bilde som skal tegnes på skjermen.
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
        // Sjekker hvilket bilde som skal tegnes basert på hvilke tiles som er rundt seg.
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

// Er helt lik som grassTile, bare at bildene er snø belagte.
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

// Et flagg som spilleren kan plukke opp
class FlagTile extends Tile {
    constructor(x, y) {
        super(x, y);
        // Variabler for å gi flagget en animasjon
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
        // Setter scoren 'red' til 1 dersom den er 0
        if (score.red <= 0) {
            score.red = 1;
        }
    }
}

// Samme som rød, bare med blå
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

// Samme som rød og blå, bare med gul
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

// Spak som kan aktiveres
class leverTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.activated = false;
    }

    get texture() {
        // returnerer riktig bilde ut i fra om den er aktivert eller ikke
        if (this.activated) {
            return [10, 8];
        } else {
            return [12, 8]
        }

    }

    onCollide() {
        // Hvis spaken ikke er aktivert, så aktiveres den
        if (!this.activated) {
            this.activated = true;
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[i].length; j++) {
                    // Fjerner alle bridge tile når den aktiveres.
                    if (map[i][j] instanceof bridgeTile) {
                        map[i][j] = new Tile(i, j);
                    }
                }
            }
        }
    }
}

// Tile som brukeren skal gå til på slutten.
class poleTile extends Tile {
    constructor(x, y) {
        super(x, y);
        this.hasCollided = false;
    }

    get texture() {
        return [12, 9]
    }

    onCollide() {
        // Sjekker om spilleren har vunnet levelet, og hvis han har blir han sendt videre til neste level.
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

// Den midterste tilen i flaggstangen.
class poleMiddleTile extends Tile {
    constructor(x, y) {
        super(x, y);
    }

    get texture() {
        return [12, 9]
    }
}

// Den øverset tilen i flaggstangen.
class poleTopTile extends Tile {
    constructor(x, y) {
        super(x, y);
    }

    get texture() {
        return [11, 9]
    }
}


