let image = document.getElementById("image");
let tankTop = 100;
let tankLeft = 100;
const tankSpeed = 10;
let tankDirection = 90; // start facing up
let trackFrame = 0;
const trackWidth = 164; // the width of each track image in the sprite sheet
const maxTrackFrames = 3; // the number of track images in the sprite sheet

image.style.position = "absolute";
image.style.top = tankTop + "px";
image.style.left = tankLeft + "px";
image.style.transform = "rotate(" + tankDirection + "deg)";

function checkKey(e) {
    console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if (e.keyCode === 32) { // spacebar
        console.log("spacebar");
        fireShell();
    } else if (e.keyCode === 38) { // up arrow
        console.log("Up arrow");
        tankDirection = 0; // face up
        image.style.transform = "rotate(" + tankDirection + "deg)";
        tankTop -= tankSpeed;
        if (tankTop < 0) {
            tankTop = 0;
        }
        image.style.top = tankTop + "px";
        updateTrackAnimation();
    } else if (e.keyCode === 40) { // down arrow
        console.log("down arrow");
        tankDirection = 180; // face down
        image.style.transform = "rotate(" + tankDirection + "deg)";
        tankTop += tankSpeed;
        if (tankTop > window.innerHeight - image.clientHeight) {
            tankTop = window.innerHeight - image.clientHeight;
        }
        image.style.top = tankTop + "px";
        updateTrackAnimation();
    } else if (e.keyCode === 37) { // left arrow
        console.log("left arrow");
        tankDirection = 270; // face left
        image.style.transform = "rotate(" + tankDirection + "deg)";
        tankLeft -= tankSpeed;
        if (tankLeft < 0) {
            tankLeft = 0;
        }
        image.style.left = tankLeft + "px";
        updateTrackAnimation();
    } else if (e.keyCode === 39) { // right arrow
        console.log("right arrow");
        tankDirection = 90; // face right
        image.style.transform = "rotate(" + tankDirection + "deg)";
        tankLeft += tankSpeed;
        if (tankLeft > window.innerWidth - image.clientWidth) {
            tankLeft = window.innerWidth - image.clientWidth;
        }
        image.style.left = tankLeft + "px";
        updateTrackAnimation();
    }
}

function updateTrackAnimation() {
    trackFrame++;
    if (trackFrame > maxTrackFrames) {
        trackFrame = 1;
    }
    const backgroundX = (trackFrame - 1) * -trackWidth;
    image.style.backgroundPosition = backgroundX + "px 0px";
}

function fireShell() {
    console.log("Firing shell!");
}

document.onkeydown = checkKey;
