var font;
var occhio;
var error;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png")
}

function setup() {
    localStorage.setItem('totalScore', localStorage.totalScore + 150);
}

function draw() {
}
