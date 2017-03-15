squareSize = 20;
obstacles = [];

function setup() {
    createCanvas(800, 400);
    frameRate(120);
    square = new Square(0, height - squareSize, squareSize, squareSize, 2, 0);
    createObstacles();
}

function draw() {
    background(50);
    reloadSquare();
    reloadObstacles();
}

function reloadSquare() {
    square.update();
    square.ground();
    square.show();
}

function reloadObstacles() {
    obstacles.forEach(function(obstacle) {
        obstacle.show();
    })
}

function keyPressed() {
    if (keyCode === 32 && !square.isJumping()) {
        square.jump();
    }
}

function createObstacles() {
    for (var i = 1; i < 100; i++) {
        obstacles.push(new Obstacle(200 * (Math.random() + 0.5) * i, (Math.random() + 1) * 10, (Math.random() + 1) * 40));
    }
}
