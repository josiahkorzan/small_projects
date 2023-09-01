let canvas;
let ctx;

let playerSize = 50;
let playerX = 0;
let playerY = 0;
let speed = 4;

let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

window.onload = init;

function init(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(){
    update();
    draw();
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function update() {
    playerMovement();
}

function playerMovement() {
    getInput();
    checkBoundaries();
    if (moveUp) {
        playerY -= speed;
    }
    if (moveDown) {
        playerY += speed;
    }
    if (moveLeft) {
        playerX -= speed;
    }
    if (moveRight) {
        playerX += speed;
    }
}

function checkBoundaries() {
    if (playerX >= canvas.width - playerSize) {
        moveRight = false;
    }
    if (playerX <= 0) {
        moveLeft = false;
    }
    if (playerY >= canvas.height - playerSize) {
        moveDown = false;
    }
    if (playerY <= 0) {
        moveUp = false;
    }
}


function getInput() {
    document.addEventListener("keydown", function(e) {
        if (e.key === 'w') {
            moveUp = true;
        }
        if (e.key === 'a') {
            moveLeft = true;
        }
        if (e.key === 's') {
            moveDown = true;
        }
        if (e.key === 'd') {
            moveRight = true;
        }
    });

    document.addEventListener("keyup", function(e) {
        if (e.key === 'w') {
            moveUp = false;
        }
        if (e.key === 'a') {
            moveLeft = false;
        }
        if (e.key === 's') {
            moveDown = false;
        }
        if (e.key === 'd') {
            moveRight = false;
        }
    });
}