var font;
var cocc;

var score = 0;
var scored = false;

var tocco = false;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 5/index_mini5.html";

var index = mini.indexOf(thisPage);

var stato = localStorage.getItem('stato');



preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  cocc = loadImage("../assets/cocc.png");
}

setup = function(){
if (localStorage.mini5 == "false"){
  localStorage.setItem('totalScore', localStorage.totalScore - 150);
  localStorage.setItem('mini5', true);
}

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 900);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
    background(0);
      imageMode(CENTER);
      image(cocc, width/2, height/2, cocc.width/2, cocc.height/2);

}

function touchStarted() {
  tocco = true;
  if (tocco == true) {
    for (var i = 0; i < touches.length; i++) {
      var d = dist(width / 2, height / 2 + 100, touches[i].x, touches[i].y);
      if (d < 225) {
        scored = true;
        fill(0);
        ellipse(touches[i].x, touches[i].y, 100);
      };
    };
  }
  return false;
}

function touchEnded(){
  tocco = false;
  if(scored == true){
  score++;
  scored = false;
}
}

draw = function() {

  if(score == 7){
    goToPage();
  }

  rect(width - 350, height/10 - 100, 300, 100);
  fill(0);

  push();
  textFont(font);
  textSize(45);
  fill("red");
  text("score: " + score + "/7", width - 350, height/10 - 40);
  pop();
}
