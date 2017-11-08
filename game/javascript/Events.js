var right = false;
var left = false;
var up = false;

document.onkeydown = function (e) {

    //Hindrer uønsket scrolling grunnet piltastbruk
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }

    if (e.keyCode == 39 && !right) {
        right = true;
    } else if (e.keyCode == 37 && !left) {
        left = true;
    } else if (e.keyCode == 38 && !up && running && (tileAtScreenPos(player.xPos, player.yPos+24).solid || tileAtScreenPos(player.xPos+20, player.yPos+24).solid)) {
        up = true;
        player.ySpeed = -5;
    } else if (e.keyCode == 32 && !running && showingSplash) {
        showingSplash = false;
        resumeGame();
    }


};

document.onkeyup = function (e) {

    if (e.keyCode == 39) {
        right = false;
    } else if (e.keyCode == 37) {
        left = false;
    }

}