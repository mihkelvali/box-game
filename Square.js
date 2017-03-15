var gravity = 0.2;

function Square(x, y, h, w, horizontalSpeed, verticalSpeed) {
    this.position = createVector(x, y);
    this.h = h;
    this.w = w;
    this.horizontalSpeed = horizontalSpeed;
    this.verticalSpeed = 0;
    this.speed = createVector(this.horizontalSpeed, this.verticalSpeed);
    this.acceleration = createVector(0, gravity);

    this.update = function() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
    }

    this.show = function() {
        fill(240);
        rect(this.position.x, this.position.y, this.h, this.w);
    }

    this.jump = function() {
        this.speed.y = -5;
    }

    this.ground = function() {
        if (this.position.y > height - this.h) {
            this.speed.y = 0;
            this.position.y = height - this.h;
        }
    }

}
