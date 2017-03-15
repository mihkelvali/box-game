squareSize = 20;

function setup() {
    createCanvas(800, 400);
    frameRate(30);
    square = new Square(100, height - squareSize, squareSize, squareSize, 1, 0);
}

function draw() {
    background(50);
    square.update();
    square.ground();
    square.show();

}

function keyPressed() {
    if (keyCode === 32) {
        square.jump();
    }
}
