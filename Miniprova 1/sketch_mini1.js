var cats = [];
var amountOfCats = 3;
var tocco = 700;
var finalScore = 0;
var font;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 1/index_mini1.html";

var index = mini.indexOf(thisPage);

var stato = localStorage.getItem('stato');

var gatto;
var macch;
var strada;

var canvas;

preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  gatto = loadImage("../assets/gatto.png");
  macch = loadImage("../assets/macchina.png");
  strada = loadImage("../assets/strada.png");
}

setup = function(){
    localStorage.setItem('totalScore', localStorage.totalScore - 150);

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 1000);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
   	background(0);

    for(var i = 0; i < amountOfCats; i++) {
      var movingCats = new Cat();
      cats.push(movingCats);
    }

    stradaY = height;

}

draw = function() {


  background(0);
  imageMode(CENTER);

  image(strada, width/2, stradaY, strada.width/2, strada.height);
  stradaY = stradaY + 20;
  if (stradaY > 400) {
  stradaY = 0;
}
  //show and give movement to cats
  for (var i = 0; i < cats.length; i++) {
    var j = cats[i];
    j.move();
    j.display();
  }
  //move car as cursor
  // image(macch, tocco, windowHeight / 2 - 100, macch.width/2, macch.height/2);

  // if(muovi == false){
  //   tocco = 700;
  //   image(macch, tocco, windowHeight / 2 - 100, macch.width/2, macch.height/2);
  // }
  //
  // if(muovi == true){
  //   tocco = mouseX;
  //   image(macch, tocco, windowHeight / 2 - 100, macch.width/2, macch.height/2);
  // }

  if (touches.length > 0) {
    tocco = touches[0].x;
    image(macch, touches[0].x, windowHeight / 2 - 100, macch.width/2, macch.height/2);
  } else {
    image(macch, tocco, windowHeight / 2 - 100, macch.width/2, macch.height/2);
  }

  for (var i = 0; i < touches.length; i++) {
    image(macch, touches[i].x, windowHeight / 2 - 100, macch.width/2, macch.height/2);
  }

  //what happens when a cat dies
  for (var i = 0; i < cats.length; i++) {
    if (cats[i].dead()) {
      cats.splice(i, 1);
      finalScore++;
    }
  }

  if(finalScore >= 3 && frameCount > 400){

    if (stato == 0) {
      window.open('../Indizio 1/index_indizio1.html', "_self");
    }
    if (stato == 1) {
      window.open('../Indizio 2/index_indizio2.html', "_self");
    }
    if (stato == 2) {
      window.open('../Indizio 3/index_indizio3.html', "_self");
    }
  }

  if(finalScore <= 2 && frameCount > 400){
    window.open('../Riprova/index_riprova.html', "_self");
  }

  push();
  textFont(font);
  textSize(45);
  fill("red");
  text("score: " + finalScore + "/3", width - 350, height/10 - 40);
  pop();

}

function Cat() {
  this.x = random(canvas.width - 100, 100);
  this.y = -700*random();
  this.diameter = 60;
  this.speedY = random(4, 10);
  this.speedX = 0;

  this.move = function() {
    if (frameCount > 200) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  this.dead = function() {
    var d = dist(tocco, windowHeight / 3, this.x, this.y);
    if (d < 120) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function() {
    image(gatto, this.x - (this.diameter) / 2, this.y - (this.diameter) / 2, gatto.width/2, gatto.height/2);
  }
  }

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
