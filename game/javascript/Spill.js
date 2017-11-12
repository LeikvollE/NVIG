// Retrieves the canvas and a 2d context to draw on
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// Sets the canvas to a fixed size, this will not affect the size of the canvas on screen, but rather change
// the size of the coordinate system to be drawn on.
canvas.width = 840;
canvas.height = 420;

// A variable to count the seconds tha game has been running.
var activeSession = 0;

// Sets the scale of the canvas drawing context to be 2, so items drawn on the canvas will
// appear larger.
ctx.scale(2,2);

// Variable to indicate if the game is running or is paused.
var running = false;

// Variable to indicate if a splash screen is currently visible to the user
var showingSplash = false;

// The audio element used to play sound during the game
var mainAudio = new Audio();

// A variable storing the location of all the tiles to be drawn on screen.
var tiles = new Image();
tiles.src = "game/img/tiles.png";

// Entities is an array containing all moving objects on the screen (Except for the player),
// and map is a 2d array containing what tiles are positioned where
var Entities = [];
var map = new Array(20);
// Making sure the map array has the right dimensions
for (let i = 0; i < map.length; i++) {
    map[i] = new Array(10);
}

// Is an object containing important information about the state of the game
var game = {
    nextLevel: "game/levels/level01.json"
}

// The player object, contains all the information about the player
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

// The current score, red, yellow, blue contains what flags have ben collected, while the goal variables contain what is
// needed to progress to the next level.
var score = {
    red: 0,
    blue: 0,
    yellow: 0,
    goalRed: 0,
    goalBlue: 0,
    goalYellow: 0
}

// Variables to keep the track of the framrate so the game behaves the same on all computers independent of its power.
var startingTime;
var lastTime;
var elapsedSinceLastLoop;

// The function that will draw the map and background elements every animation frame.
function drawMap() {

    // Draws a background
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#5e81a2";
    ctx.fill();

    // Iterates through the 2d array and draws the correct tile based on the values in the array
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            // texIndex will be set to the position of the sprite to be drawn on the tiles image.
            let texIndex = map[i][j].texture;
            if (!texIndex) continue;
            ctx.imageSmoothingEnabled = false;
            // Draws the image on the correct position.
            ctx.drawImage(tiles, texIndex[0]*(21+2), texIndex[1]*(21+2), 21, 21, i*21, j*21, 21, 21);
        }
    }

    // Draws the timer to the screen, it will not show when the timer is not yet started.
    if (activeSession !== 0) {
        ctx.fillStyle = "black";
        ctx.fillText(((activeSession)).toFixed(2)+"s", canvas.width/4, 15);
    }
}

// Function for drawing the correct player sprites to the canvas.
function drawPlayer() {
    // Starts by drawing a white square at the players position so the player is always visible.
    // Even when no points are gathered.
    ctx.beginPath();
    ctx.rect(player.xPos, player.yPos, 20, 20);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // Checks to see if the red flag has been collected, if it has it will draw the red of the flag.
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

    // Draws the entities to the canvas
    for (let i = 0; i < Entities.length; i++) {
        // Gets the texture of said entity
        let img = new Image();
        img.src = Entities[i].texture;
        // Draws it at the position.
        ctx.drawImage(img, Entities[i].x, Entities[i].y);
    }
}

// Function responsible for handling player movement.
function move(elapsedSinceLastLoop) {

    // Changes the direction of the player based on what keys are pressed, the booleans left and right are set in Events.js
    let direction = 0;
    if (left) {
        direction = -1;
    } else if (right) {
        direction = 1;
    }

    // Increments the timer, this is done in the move function so the timer will only count when the player can move.
    activeSession += elapsedSinceLastLoop;

    // Iterates through all entities and calls their move method, and checks if the have collided with the player.
    for (let i = 0; i < Entities.length; i++) {
        if (Entities[i].checkCollision()) {
            return;
        }
        Entities[i].move(elapsedSinceLastLoop);
    }

    // Checks if the player has collided with anything in the horizontal direction, and calls the on collide method,
    // of the tiles it has collied with
    checkCollisions(direction);

    // Checks if any of the four corners of the player sprite has collided with a solid block, and if not it will
    // allow the player to move.
    if (!(tileAtScreenPos(player.xPos+player.speed*direction*elapsedSinceLastLoop*70, player.yPos).solid ||
        tileAtScreenPos(player.xPos+player.speed*direction*elapsedSinceLastLoop*70, player.yPos+20).solid ||
        tileAtScreenPos(player.xPos+20+player.speed*direction*elapsedSinceLastLoop*70, player.yPos).solid ||
        tileAtScreenPos(player.xPos+20+player.speed*direction*elapsedSinceLastLoop*70, player.yPos+20).solid)) {
        player.xPos += player.speed*direction*elapsedSinceLastLoop*70;
    } else {
        player.xPos = Math.round(player.xPos/21)*21;
    }

    // Makes sure the player is teleported to the other side of the map if he leaves the canvas, in the x direction.
    if (player.xPos <= -20) {
        player.xPos = map.length*21-2;
    } else if (player.xPos >=map.length*21) {
        player.xPos = -19
    }

    // Checks all four corners if the are about to collide with anything solid in the y direction, if not it will move the
    // player according to the y speed.
    if (tileAtScreenPos(player.xPos, player.yPos+player.ySpeed*elapsedSinceLastLoop*60+20).solid ||
        tileAtScreenPos(player.xPos, player.yPos+player.ySpeed*elapsedSinceLastLoop*60).solid ||
        tileAtScreenPos(player.xPos+20, player.yPos+player.ySpeed*elapsedSinceLastLoop*60+20).solid ||
        tileAtScreenPos(player.xPos+20, player.yPos+player.ySpeed*elapsedSinceLastLoop*60).solid) {
        // If it is about to collide it wil reset the ySpeed
        player.ySpeed = 0;
    } else {
        player.yPos += player.ySpeed*elapsedSinceLastLoop*60;

    }

    // Increments the speed in the y direction by 9.81 pixels every second.
    player.ySpeed += player.gravity*elapsedSinceLastLoop;


}

// Function resposible for making calls to other functions tha should be called every animation frame
function gameLoop(currentTime) {
    // Sets up the counting of time elapsed since the last frame
    if(!startingTime){startingTime=currentTime;}
    if(!lastTime){lastTime=currentTime;}
    elapsedSinceLastLoop=(currentTime-lastTime);
    if (elapsedSinceLastLoop > 500) elapsedSinceLastLoop = 0;
    lastTime=currentTime;
    drawMap();
    drawPlayer();
    move(elapsedSinceLastLoop/1000);

    // If the game is still running after this frame, a nes frame should be requested.
    if (running) requestAnimationFrame(gameLoop);
}

// If the game has been stopped this function will properly start the game again.
function resumeGame() {
    running = true;
    requestAnimationFrame(gameLoop);
}

// Starts the game by requesting the first level to be started when the image containing the tiles has loaded.
tiles.onload = function () {
    nextLevel();
}