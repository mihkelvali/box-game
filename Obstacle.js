function Obstacle(x, w, h) {
    this.position = createVector(x, height - h);
    this.w = w;
    this.h = h;

    this.show = function() {
        fill(100);
        noStroke();
        rect(this.position.x, this.position.y, this.w, this.h);
    }

}