const image = document.getElementById("image");
let tankTop = 100, tankLeft = 100;
const tankSpeed = 10;
let tankDirection = 90;
let trackFrame = 0, maxTrackFrames = 1, trackWidth = 164;

Object.assign(image.style, {
    position: "absolute",
    top: tankTop + "px",
    left: tankLeft + "px",
    transform: `rotate(${tankDirection}deg)`
});

function checkKey(e) {
    e = e || window.event;
    const code = e.keyCode;
    console.log(`key nr = ${code}`);

    switch (code) {
        case 32: // spacebar
            console.log("spacebar");
            fireShell();
            break;

        case 38: // up arrow
            console.log("Up arrow");
            tankDirection = 0;
            tankTop -= tankSpeed;
            if (tankTop < 0) tankTop = 0;
            break;

        case 40: // down arrow
            console.log("down arrow");
            tankDirection = 180;
            tankTop += tankSpeed;
            if (tankTop > window.innerHeight - image.clientHeight)
                tankTop = window.innerHeight - image.clientHeight;
            break;

        case 37: // left arrow
            console.log("left arrow");
            tankDirection = 270;
            tankLeft -= tankSpeed;
            if (tankLeft < 0) tankLeft = 0;
            break;

        case 39: // right arrow
            console.log("right arrow");
            tankDirection = 90;
            tankLeft += tankSpeed;
            if (tankLeft > window.innerWidth - image.clientWidth)
                tankLeft = window.innerWidth - image.clientWidth;
            break;

        default:
            break;
    }

    image.style.transform = `rotate(${tankDirection}deg)`;
    image.style.top = tankTop + "px";
    image.style.left = tankLeft + "px";
    updateTrackAnimation();
}

function updateTrackAnimation() {
    trackFrame = (trackFrame % maxTrackFrames) + 1;
    const backgroundX = (trackFrame - 1) * -trackWidth;
    console.log(backgroundX, "backgroundX value")
    image.style.backgroundPosition = `${backgroundX}px 0px`;
}

function fireShell() {
    const shell = document.createElement("div");
    shell.className = "shell";
    shell.style.backgroundImage = "url('tank.png')";
    shell.style.top = (tankTop + 50) + "px";
    shell.style.left = (tankLeft + 50) + "px";
    shell.style.transform = "rotate(" + tankDirection + "deg)";
    document.body.appendChild(shell);
}

document.onkeydown = checkKey;
