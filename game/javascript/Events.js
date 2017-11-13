// Filnavn: Events.js
// Skrevet av: Eirik leikvoll
// Når: Oktober 2017
// Mening: Behandler input fra brukeren.

// Variables to see what keys are pressed
var right = false;
var left = false;

document.onkeydown = function (e) {

    // Prevents the page to scroll when using the arrow keys.
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }

    // Checks what keys are pressed, and updates the correct variables telling the game the key have been pressed.
    if (e.keyCode === 39 && !right) {
        right = true;
    } else if (e.keyCode === 37 && !left) {
        left = true;
    } else if (e.keyCode === 38 && running && (tileAtScreenPos(player.xPos, player.yPos+24).solid || tileAtScreenPos(player.xPos+20, player.yPos+24).solid)) {
        // Makes the player jump if the space key is pressed, and the player is standing on solid ground.
        player.ySpeed = -5;
    } else if (e.keyCode === 32 && !running && showingSplash) {
        // Removes tha splash and resumes the game if a splash is shown.
        e.preventDefault();
        showingSplash = false;
        mainAudio.src = game.music;
        mainAudio.play();
        resumeGame();
    }


};

// Sets the variables to false when the user lets go of the keys.
document.onkeyup = function (e) {

    if (e.keyCode == 39) {
        right = false;
    } else if (e.keyCode == 37) {
        left = false;
    }

}