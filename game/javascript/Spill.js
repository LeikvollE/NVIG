var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

canvas.width = 840;
canvas.height = 420;

ctx.scale(2,2);

var running = false;
var showingSplash = false;

var mainAudio = new Audio();

preLoadImage("game/img/maps/map01.png");
preLoadImage("game/img/maps/map02.png");
preLoadImage("game/img/maps/mapWinscreen.png");

var tiles = new Image();
tiles.src = "game/img/tiles.png";

var Entities = [];
var map = new Array(20);
for (let i = 0; i < map.length; i++) {
    map[i] = new Array(10);
}

var game = {
    nextLevel: "game/levels/level01.json"
}

var player = {
    imageRed: "",
    imageBlue: "",
    imageYellow: "",
    xPos: 50,
    yPos: 100,
    xStart: 0,
    yStart: 0,
    speed: 2,
    ySpeed: 0,
    gravity: 9.81
}

var score = {
    red: 0,
    blue: 0,
    yellow: 0,
    goalRed: 0,
    goalBlue: 0,
    goalYellow: 0
}

var startingTime;
var lastTime;
var elapsedSinceLastLoop;

function drawMap() {

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#5e81a2";
    ctx.fill();

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let texIndex = map[i][j].texture;
            if (!texIndex) continue;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(tiles, texIndex[0]*(21+2), texIndex[1]*(21+2), 21, 21, i*21, j*21, 21, 21);
        }
    }

}

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(player.xPos, player.yPos, 20, 20);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    if (score.red > 0) {
        let redImg = new Image();
        redImg.src = player.imageRed;
        ctx.drawImage(redImg, player.xPos, player.yPos);
    }

    if (score.yellow > 0) {
        let yellowImg = new Image();
        yellowImg.src = player.imageYellow;
        ctx.drawImage(yellowImg, player.xPos, player.yPos);
    }

    if (score.blue > 0) {
        let blueImg = new Image();
        blueImg.src = player.imageBlue;
        ctx.drawImage(blueImg, player.xPos, player.yPos);
    }

    //console.log(Entities);
    for (let i = 0; i < Entities.length; i++) {
        /*ctx.beginPath();
        ctx.rect(Entities[i].x, Entities[i].y, 20, 20);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();*/
        let img = new Image();
        img.src = Entities[i].texture;
        ctx.drawImage(img, Entities[i].x, Entities[i].y);
    }
}

function move(elapsedSinceLastLoop) {
    let direction = 0;
    if (left) {
        direction = -1;
    } else if (right) {
        direction = 1;
    }


    for (let i = 0; i < Entities.length; i++) {
        Entities[i].move();
        Entities[i].checkCollision();
    }

    checkCollisionsHorizontal(direction);

    if (!(tileAtScreenPos(player.xPos+player.speed*direction, player.yPos).solid ||
        tileAtScreenPos(player.xPos+player.speed*direction, player.yPos+20).solid ||
        tileAtScreenPos(player.xPos+20+player.speed*direction, player.yPos).solid ||
        tileAtScreenPos(player.xPos+20+player.speed*direction, player.yPos+20).solid)) {
        player.xPos += player.speed*direction;
    }



    if (player.xPos <= -21) {
        player.xPos = map.length*21-1;
    } else if (player.xPos >=map.length*21) {
        player.xPos = -20
    }

    player.ySpeed += player.gravity*elapsedSinceLastLoop;

    checkCollisionVertical();

    if (tileAtScreenPos(player.xPos, player.yPos+player.ySpeed+20).solid ||
        tileAtScreenPos(player.xPos, player.yPos+player.ySpeed).solid ||
        tileAtScreenPos(player.xPos+20, player.yPos+player.ySpeed+20).solid ||
        tileAtScreenPos(player.xPos+20, player.yPos+player.ySpeed).solid) {
        player.ySpeed = 0;
        up = false;
    } else {
        player.yPos += player.ySpeed;
    }


}

function gameLoop(currentTime) {
    if(!startingTime){startingTime=currentTime;}
    if(!lastTime){lastTime=currentTime;}
    elapsedSinceLastLoop=(currentTime-lastTime);
    if (elapsedSinceLastLoop > 500) elapsedSinceLastLoop = 0;
    lastTime=currentTime;
    drawMap();
    drawPlayer();
    move(elapsedSinceLastLoop/1000);

    if (running) requestAnimationFrame(gameLoop);
}

function resumeGame() {
    running = true;
    requestAnimationFrame(gameLoop);
}


tiles.onload = function () {
    nextLevel();
}