function Bird() {

    this.x = 50;
    this.y = height / 2;
    this.r = 40;

    this.gravity = 0.1;
    this.lift = -10;
    this.velocity = 0;

    this.show = function () {
        stroke(255);
        strokeWeight(2);
        fill(0);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.up = function () {
        this.velocity += this.lift;
    }

    this.down = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
        } else if (this.y < this.r / 2) {
            this.y = this.r / 2;
        }
    }

}