// Filnavn: Enemies.js
// Skrevet av: Eirik leikvoll
// Når: Oktober 2017
// Mening: Definerer hvordan fiender i spillet skal se ut og oppføre seg.

// Definerer en helt enkelt ting som kan bevege seg uten noe funksjonalitet.
class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Metode som skal returnerer bilde som skal tegnes på skjermen
    get texture() {
        return null;
    }

    // Metode som skal sørge for at Entity'en beveger seg riktig på skjermen
    move(delta) {
        return;
    }

    // Metode som sjekker om vi Entity'en har kollidert med noe, og utfører instruksjoner som skal utføres under en kollisjon.
    checkCollision() {

    }
}

// Definerer en fireBall projektil
class fireBall extends Entity {
    constructor(x, y, xSpeed, ySpeed) {
        super(x, y);
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    get texture() {
        return "game/img/fireBall.png";
    }

    move(delta) {

        this.ySpeed += player.gravity*delta;
        this.y+=this.ySpeed*delta*60;
        this.x+=this.xSpeed*delta*60;

        // Dersom den er utenfor skjermen, fjerner den seg selv fra Entities arrayet slik at den ikke lenger tegnes, eller oppdateres.
        if (this.y > map[0].length*21) {
            Entities.splice(Entities.indexOf(this), 1)
        }

    }

    checkCollision() {
        // Dersom vi har kollidert med den, pauser den spillet i et sekund før den resetter levelet.
        if ((player.xPos <= this.x+15 && this.x <= player.xPos+15) && (player.yPos <= this.y+15 && this.y <= player.yPos+15)) {
            running = false;
            player.xPos = player.xStart;
            player.yPos = player.yStart;
            player.ySpeed = 0;
            for (let i = 0; i < Entities.length; i++) {
                if (Entities[i] instanceof fireBall) {
                    Entities.splice(i, 1);
                    i--;
                    continue;
                } else if (Entities[i] instanceof Boss) {
                    Entities[i].x = Entities[i].initX;
                    Entities[i].y = Entities[i].initY;
                }
            }
            setTimeout(function () {
                resumeGame();
            },1000);
            return true;
        }
        return false;
    }
}

// Definerer en vanlig enemy som beveger seg frem og tilbake på skjermen, og skader spilleren.
class Enemy extends Entity {
    constructor(x, y) {
        super(x, y);
        this.speed = 1;
        this.direction = 1;
    }

    move(delta) {
        // Sjekker om den har mulighet til å fortsette rett frem, hvis den ikke har det så snur den retning.
        if (tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+this.speed*this.direction, this.y+25).solid)) {
            this.direction*=-1;
        }
        if (tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid || (!tileAtScreenPos(this.x+20+this.speed*this.direction, this.y).solid && !tileAtScreenPos(this.x+20+this.speed*this.direction, this.y+25).solid)) {
            this.direction*=-1;
        }

        // Beveger seg i en rett linje i x retningen.
        this.x+=this.speed*this.direction* delta*50;
    }

    checkCollision() {
        // Hvis den har kollidert med spilleren, så resettes scoren.
        if ((player.xPos <= this.x+20 && this.x <= player.xPos+20) && (player.yPos <= this.y+20 && this.y <= player.yPos+20)) {
           score.red = 0;
           score.blue = 0;
           score.yellow = 0;
        }
    }
}

// Spesial tilfelle av en vanlig enemy, som er en spania enemy.
class spainEnemy extends Enemy {
    constructor(x, y) {
        super(x, y);
    }

    // Returnerer bilde av spania flagget.
    get texture() {
        return "game/img/player/SpainEnemy.png";
    }
}

// Definerer en Boss som et spesial tilfelle av en fiende.
class Boss extends Enemy {
    constructor(x, y, health) {
        super(x, y);
        this.initX = x;
        this.initY = y;
        this.ySpeed = 0;
    }

    checkCollision() {
        // Sjekker om bossen har kollidert med spillere, hvis den har så resettes levelet etter et sekund.
        if ((player.xPos <= this.x+20 && this.x <= player.xPos+20) && (player.yPos <= this.y+20 && this.y <= player.yPos+20)) {
            running = false;
            this.x = this.initX;
            this.y = this.initY;
            player.xPos = player.xStart;
            player.yPos = player.yStart;
            player.ySpeed = 0;
            for (let i = 0; i < Entities.length; i++) {
                if (Entities[i] instanceof fireBall) {
                    Entities.splice(i, 1);
                    i--;
                }
            }
            setTimeout(function () {
                resumeGame();
            },1000);
        }
    }

}

// Definerer nepalBoss som et spesial tilfelle av en boss
class nepalBoss extends Boss {
    constructor(x, y, health) {
        super(x,y,health);
        this.speed = 0.5;
        this.timer = 0;
        score.red = 1;
    }

    move(delta) {

        // Hvis nepal kommer utenfor skjermen, betyr det at den er død, og neste level blir forsespurt.
        if (this.y > map[0].length*21) {
            running = false;
            setTimeout(nextLevel, 1000);
        }

        // Timer for å sjekke hvor ofte den bør kaste ut en ildkuler
        this.timer++;

        // Hvis timeren er over 60 kastes det ut en ildkule, med x og y fart slik at den flyr i spillers retning. Setter timer tilbake til 0
        if (this.timer > 60) {
            Entities.push(new fireBall(this.x, this.y, (Math.abs(this.x-player.xPos)/(2.39113*(delta*1000))*this.direction)/1.75, -5));
            this.timer = 0;
        }

        // Setter retningen til bossen til å være mot spilleren.
        if (player.xPos - this.x > 0) {
            this.direction = 1;
        } else {
            this.direction = -1;
        }

        if (Math.abs(player.xPos - this.x) > 20) {
            // Hvis spiller er lengre enn 20 piksler unna beveger bossen seg lineært mot spillere
            this.x += this.speed * this.direction * delta*50;
        } else if (Math.abs(player.xPos - this.x) > 5) {
            // Ellers vil bossen så lenge den er mer enn 5 piksler fra spilleren bevege seg som en sigmoid kurve mot spilleren.
            this.x += this.speed*this.direction*(1 / (1 + Math.pow(Math.exp(1), (4 - Math.abs(this.x-player.xPos) / 2.5)))); //1 / (1 + e^(4 - x / 2.5))
        }

        // Grabitasjon oppdateres.
        this.ySpeed += player.gravity*delta;

        // Sjekker om nepal kan falle ned.
        if (tileAtScreenPos(this.x, this.y+this.ySpeed+40).solid ||
            tileAtScreenPos(this.x, this.y+this.ySpeed).solid ||
            tileAtScreenPos(this.x+20, this.y+this.ySpeed+40).solid ||
            tileAtScreenPos(this.x+20, this.y+this.ySpeed).solid) {
            this.ySpeed = 0;
        } else {
            this.y += this.ySpeed*delta*60;
        }

    }

    get texture() {
        // Returnerer riktig bilde ut i fra hvilken retning den ser.
        if (this.direction == -1) return "game/img/player/nepalBossR.png";
        return "game/img/player/nepalBoss.png";
    }
}