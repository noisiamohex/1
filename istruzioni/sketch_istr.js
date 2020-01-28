var font;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
}

function draw() {
}

function findIndizio(){
  document.getElementById("indizio").style.opacity = 1;
}

function mousePressed(){
  document.getElementById("indizio").style.opacity = 0;
}
