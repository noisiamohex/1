var font;

var anulare;
var medio;

var palmo;
var dito;

var endLoading = false;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 7/index_7p7n7a.html";

var index = mini.indexOf(thisPage);


preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  dito = loadImage("../assets/dito1.png");
  palmo = loadImage("../assets/mano2.png");
}

setup = function(){
if (localStorage.mini7 == "false"){
  localStorage.setItem('totalScore', Number(localStorage.totalScore) - 150);
  localStorage.setItem('mini7', true);
}

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 900);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
    background(0);

    anulare = new Circle(width/2 - 27, height/2 - 180);
    medio = new Circle(width/2 + 63, height/2 - 175);

}


draw = function() {
  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }

  background(0);

  anulare.display();
  medio.display();

  imageMode(CENTER);
  var mano = image(palmo, width / 2 - 50, height / 2 + 60, palmo.width / 2.5, palmo.height / 2.5);

  if (anulare.touched == true && medio.touched == true && endLoading == false) {
    goToPage();
    endLoading = true;
  }

}

function touchStarted(){
  for(var i = 0; i < touches.length; i++){
    var d1 = dist(touches[i].x, touches[i].y, anulare.x, anulare.y);
    if(d1 < anulare.size/2){
      anulare.touched = true;
    }
    var d2 = dist(touches[i].x, touches[i].y, medio.x, medio.y);
    if(d2 < medio.size/2){
      medio.touched = true;
    }
  }
}


function Circle(_x, _y, _size){
  this.x = _x;
  this.y = _y;
  this.size = 100;
  this.touched = false;

  this.display = function() {
    if (this.touched == false) {
      push();
      noFill();
      stroke(255, 0, 0);
      strokeWeight(3);
      beginShape();
      vertex(this.x - 15, this.y - 220);
      vertex(this.x + 5, this.y - 200);
      vertex(this.x + 25, this.y - 220);
      endShape();
      pop();

      push();
      fill(255,0,0);
      ellipse(this.x, this.y, 70);
      pop();

      image(dito, this.x, this.y, dito.width/2.5, dito.height/2.5);
    }
  }
}
