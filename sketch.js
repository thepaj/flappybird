let bird;
let pipes = [];
let num = 0;
let bg;
let flappy;

function setup() {
    createCanvas(400, 600);
    bg = loadImage('mountain.jpg')

    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(bg);
    bird.down();
    bird.show();
    num++;

    if (num % 200 === 0) {
        pipes.push(new Pipe());
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();

        if (pipes[i].x < -20) {
            pipes.splice(i, 1);
        }

        pipes[i].show();
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}