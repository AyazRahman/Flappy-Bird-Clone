var bird;
var pipes = [];
counter = 0;

function setup() {
  scoreElem = createDiv();
  scoreElem.position(20, 20);
  scoreElem.id = "score";
  scoreElem.style("font-weight", "bold");

  createCanvas(400, 600);
  resetSketch();
}

function draw() {
  counter++;
  background(0);
  bird.update();
  bird.show();
  hit();

  if (counter % 100 == 0) {
    pipes.push(new Pipe());
  }

  if (frameCount % 50 == 0) {
    this.bird.score++;
    scoreElem.html("Score : " + this.bird.score);
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }
}

function hit() {
  if (bird.y - bird.radius < 0 || bird.y + bird.radius > height) {
    gameOver();
  } else {
    for (var i = 0; i < pipes.length; i++) {
      if (pipes[i].hits(bird)) {
        gameOver();
      }
    }
  }
}

function gameOver() {
  scoreElem.style("color", "red");
  scoreElem.html("Game Over. Final score : " + this.bird.score);
  noLoop();
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  } else if (keyCode === ENTER) {
    resetSketch();
    loop();
  }
}

function resetSketch() {
  clear();
  /* this.pipes = [];
  scoreElem.remove();
   */
  bird = new Bird();
  pipes = [];
  pipes.push(new Pipe());
  scoreElem.html("Score : " + this.bird.score);
  scoreElem.style("color", "white");
  counter = 0;
}
