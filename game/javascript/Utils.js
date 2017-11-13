// Filnavn: Utils.js
// Skrevet av: Eirik leikvoll
// Når: Oktober 2017
// Mening: Diverse funksjoner som brukes til spillet.


// Function to find out what tile is located at a certain screen position
function tileAtScreenPos(x, y) {
    // If the position is outside the canvas it will return an empty tile.
    if (x < 0 || Math.floor(x/21) >= map.length || y < 0 || Math.floor(y/21) >= map[0].length) return new Tile(x, y);
    // Else is will check in the map array what til is located at the position.
    return map[Math.floor(x/21)][Math.floor(y/21)];
}

// Will load a map, the parameter levelFile should be the path a json file.
function loadMap(levelFile) {

    // Wile loading a level the game should not update before after the level is loaded.
    running = false;

    // Gets an object based on the info in the json file
    var level = getJsonObject(levelFile)

    // Loads the map image based on the information in the json file
    var image = new Image();
    image.src = level.map;

    game.music = level.levelTheme;

    image.onload = function () {
        // Creates a new canvas and draws the map information on it, this will make it possible to get information
        // about individual pixels.
        var mapCanvas = document.createElement("canvas");
        mapCanvas.width = image.width;
        mapCanvas.height = image.height;
        mapCanvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);

        // Empties out the entities array.
        Entities = [];

        // Iterates through the pixels and uses it to place the tiles and entities in the correct positions.
        for (let i = 0; i < image.width; i++) {
            for (let j = 0; j < image.height; j++) {
                // pixelData will be an array with red, green, blue, alpha.
                var pixelData = mapCanvas.getContext("2d").getImageData(i, j, 1, 1).data;
                // Checks the colour values of the pixel to determine what tile should be placed a the corresponding place
                // in the map array
                if (pixelData[1] == 255) map[i][j] = new grassTile(i, j);
                else if (pixelData[1] == 254) map[i][j] = new grassSnowTile(i, j);
                else if (pixelData[1] == 200) map[i][j] = new bridgeTile(i, j);
                else if (pixelData[1] == 40) map[i][j] = new leverTile(i, j);
                else if (pixelData[2] == 250) map[i][j] = new redFlagTile(i, j);
                else if (pixelData[2] == 240) map[i][j] = new blueFlagTile(i, j);
                else if (pixelData[2] == 230) map[i][j] = new yellowFlagTile(i, j);
                else if (pixelData[0] == 100){
                    // The pole tile will occupy multiple tiles.
                    map[i][j] = new poleTile(i, j);
                    map[i][j-1] = new poleMiddleTile(i, j);
                    map[i][j-2] = new poleTopTile(i, j);
                } else if (pixelData[2] == 40) {
                    // Will set the tile to an empty tile, and push an entity to entities with the correct screen position.
                    map[i][j] = new Tile(i, j);
                    Entities.push(new spainEnemy(i*21, j*21+1));

                }
                else if (pixelData[2] == 50) {
                    map[i][j] = new Tile(i, j);
                    Entities.push(new nepalBoss(i*21, j*21+2, 100));

                }
                // If no match is found, simply place an air tile in the position.
                else map[i][j] = new Tile(i, j);
            }
        }

        // Load the player sprites onto the player objects
        player.imageRed = level.playerTextures.red;
        player.imageBlue = level.playerTextures.blue;
        player.imageYellow = level.playerTextures.yellow;

        // Load the win conditions into the score objects
        score.goalRed = level.winCondition.red;
        score.goalBlue = level.winCondition.blue;
        score.goalYellow = level.winCondition.yellow;

        // Load the next level attribute onto the game object.
        game.nextLevel = level.nextLevel;

        // Make sure the player object knows what its start position is, and moves the player there.
        player.xStart = level.startPosition.x;
        player.yStart = level.startPosition.y;
        player.xPos = level.startPosition.x;
        player.yPos = level.startPosition.y;

        // Draws the map one time and a splash screen over it
        drawMap();
        showSplash(level);
        player.ySpeed = 0;
    }

}

// A function to check, and execute methods, for collisions.
function checkCollisions(direction) {
    // Executes the onCollide method on all tiles we are currently overlapping.
    tileAtScreenPos(player.xPos, player.yPos).onCollide();
    tileAtScreenPos(player.xPos, player.yPos+20).onCollide();
    tileAtScreenPos(player.xPos+20, player.yPos).onCollide();
    tileAtScreenPos(player.xPos+20, player.yPos+20).onCollide();
}

// A function to get a json object based on a json file. The fil argument is the location of the json object.
function getJsonObject(fil) {
    // Makes a new HttpRequest.
    var read = new XMLHttpRequest();
    // Sends the reguest with Get
    read.open('GET', fil, false);
    read.send();

    // Uses the built in json parser to get the object
    return JSON.parse(read.responseText);
}

// A function for showing a splash to the user.
function showSplash(level) {
    // Makes sure tha game knows a splash is currently being shown.
    showingSplash = true;

    // Draws a rectangle on the screen to contain the splash information.
    ctx.beginPath();
    ctx.rect(20, 20, map.length*21-40, map[0].length*21-40);
    ctx.fillStyle = "#ffffff99";
    ctx.fill();

    // Setup for the text
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    // Fills tha splash title at the top of the splash
    ctx.fillText(level.name,(map.length*21)/2,50);

    ctx.font = "11px Arial";

    // Iterates through all lines in the splash information and draws them to the screen.
    for (let i = 0; i < level.lines.length; i++) {
        ctx.fillText(level.lines[i], (map.length*21)/2, 70+15*i);
    }
    ctx.stroke();
}

// A function for moving a player from one point on the screen to another
function movePlayerToPoint(x, y, speed, whenDone) {
    // Pausing the game so the player can't be moved through input or gravity.
    running = false;

    // Varibles to see if the player is a the desired poition.
    var xFinished = false;
    var yFinished = false;

    // Checks if the player is currently at the desired position, or will be in this frame.
    if (Math.abs(player.xPos - x) > speed) {
        // If not, figure out what direction it is in, and move the player in that direction
        if (player.xPos > x) {
            player.xPos-=speed;
        } else {
            player.xPos+=speed;
        }
    } else {
        // If it is, move the x position to be at the desired position, and set the boolean to true indicating that the x is done.
        player.xPos = x;
        xFinished = true;
    }

    // The same as above just with y
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

    // Manually draws the map and player, so we can see tha player moving without collisions or entities moving.
    drawMap();
    drawPlayer();

    // When both are done, call the finished event.
    if (xFinished && yFinished) {
        whenDone();
    } else {
        // If not done, recursively calls the function with the same parameters until it is done.
        requestAnimationFrame(function () {
            return movePlayerToPoint(x, y, speed, whenDone);
        });
    }
}

// Function to request the next level to be loaded.
function nextLevel() {
    mainAudio.pause();
    // Resets the score
    score.red = 0;
    score.blue = 0;
    score.yellow = 0;
    // Loads the next level based on the information in the game object
    loadMap(game.nextLevel);
}