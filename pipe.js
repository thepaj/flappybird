function Pipe() {
    this.x = width;
    this.w = 20;
    this.top = random(height/2 - 50);
    this.bottom = random(height/2- 50);
    this.speed = -1;
    
    this.show = function() {
        stroke(255);
        strokeWeight(3);
        fill(0);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }
    
    this.update = function() {
        this.x += this.speed;
    }
}