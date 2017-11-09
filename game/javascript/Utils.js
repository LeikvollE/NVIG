function tileAtScreenPos(x, y) {
    if (x < 0 || Math.floor(x/21) >= map.length || y < 0 || Math.floor(y/21) >= map[0].length) return new Tile(x, y);
    return map[Math.floor(x/21)][Math.floor(y/21)];
}

function preLoadImage(src) {
    let img = new Image();
    img.src = src;
}

function loadMap(levelFile) {
    running = false;
    var level = getJsonObject(levelFile)
    var image = new Image();
    image.src = level.map;
    mainAudio.src = level.endSong;

    image.onload = function () {
        var mapCanvas = document.createElement("canvas");
        mapCanvas.width = image.width;
        mapCanvas.height = image.height;
        mapCanvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
        Entities = [];
        for (let i = 0; i < image.width; i++) {
            for (let j = 0; j < image.height; j++) {
                var pixelData = mapCanvas.getContext("2d").getImageData(i, j, 1, 1).data;
                if (pixelData[1] == 255) map[i][j] = new grassTile(i, j);
                else if (pixelData[1] == 254) map[i][j] = new grassSnowTile(i, j);
                else if (pixelData[1] == 200) map[i][j] = new bridgeTile(i, j);
                else if (pixelData[1] == 40) map[i][j] = new leverTile(i, j);
                else if (pixelData[2] == 250) map[i][j] = new redFlagTile(i, j);
                else if (pixelData[2] == 240) map[i][j] = new blueFlagTile(i, j);
                else if (pixelData[2] == 230) map[i][j] = new yellowFlagTile(i, j);
                else if (pixelData[0] == 100){
                    map[i][j] = new poleTile(i, j);
                    map[i][j-1] = new poleMiddleTile(i, j);
                    map[i][j-2] = new poleTopTile(i, j);
                } else if (pixelData[2] == 40) {
                    map[i][j] = new Tile(i, j);
                    Entities.push(new spainEnemy(i*21, j*21+1));

                }
                else if (pixelData[2] == 50) {
                    map[i][j] = new Tile(i, j);
                    Entities.push(new nepalBoss(i*21, j*21+2, 100));

                }
                else map[i][j] = new Tile(i, j);
            }
        }

        player.imageRed = level.playerTextures.red;
        player.imageBlue = level.playerTextures.blue;
        player.imageYellow = level.playerTextures.yellow;

        score.goalRed = level.winCondition.red;
        score.goalBlue = level.winCondition.blue;
        score.goalYellow = level.winCondition.yellow;

        game.nextLevel = level.nextLevel;

        player.xStart = level.startPosition.x;
        player.yStart = level.startPosition.y;

        player.xPos = level.startPosition.x;
        player.yPos = level.startPosition.y;



        drawMap();
        showSplash(level);
        player.ySpeed = 0;
    }

}

function checkCollisionsHorizontal(direction) {
    tileAtScreenPos(player.xPos+player.speed*direction, player.yPos).onCollide();
    tileAtScreenPos(player.xPos+player.speed*direction, player.yPos+20).onCollide();
    tileAtScreenPos(player.xPos+20+player.speed*direction, player.yPos).onCollide();
    tileAtScreenPos(player.xPos+20+player.speed*direction, player.yPos+20).onCollide();
}

function checkCollisionVertical() {

}

function getJsonObject(fil) {
    var read = new XMLHttpRequest();
    read.open('GET', fil, false);
    read.send();

    return JSON.parse(read.responseText);
}

function showSplash(level) {
    showingSplash = true;
    ctx.beginPath();
    ctx.rect(20, 20, map.length*21-40, map[0].length*21-40);
    ctx.fillStyle = "#ffffff99";
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(level.name,(map.length*21)/2,50);
    ctx.font = "11px Arial";
    for (let i = 0; i < level.lines.length; i++) {
        ctx.fillText(level.lines[i], (map.length*21)/2, 70+15*i);
    }
    ctx.stroke();
}

function movePlayerToPoint(x, y, speed, whenDone) {
    running = false;
    var xFinished = false;
    var yFinished = false;
    if (Math.abs(player.xPos - x) > speed) {
        if (player.xPos > x) {
            player.xPos-=speed;
        } else {
            player.xPos+=speed;
        }
    } else {

        player.xPos = x;
        xFinished = true;
    }
    if (Math.abs(player.yPos - y) > speed) {
        if (player.yPos > y) {
            player.yPos-=speed;
        } else {
            player.yPos+=speed;
        }
    } else {
        player.yPos = y;
        yFinished = true;
    }

    drawMap();
    drawPlayer();

    if (xFinished && yFinished) {
        whenDone();
    } else {
        requestAnimationFrame(function () {
            return movePlayerToPoint(x, y, speed, whenDone);
        });
    }
}

// Funksjonen resetter score variabelen, og laster det neste nivået(basert på hva som står i det nåverende)
// nivået sin .json fil
function nextLevel() {
    score.red = 0;
    score.blue = 0;
    score.yellow = 0;
    loadMap(game.nextLevel);
}