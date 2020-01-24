var font;

var indice;
var medio;

var move = false;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 6/index_mini6.html";

var index = mini.indexOf(thisPage);

var stato = localStorage.getItem('stato');


preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
}

setup = function(){
    localStorage.setItem('totalScore', localStorage.totalScore - 150);

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 900);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
    background(0);

    indice = new Circle(width/2, height/3);
    medio = new Circle(width/2 + 200, height/3-100);

}


draw = function() {
  background(0);

  indice.display();
  medio.display();

  if(touches.length == 2){
    medio.move();
    move = true;
  }

for (var i = 0; i < touches.length; i++){
  var d = dist(touches[i].x, touches[i].y, width/2-280, height/3-100);
};

  if(touches.length == 2 && d < 100 && move == true){
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

  textFont(font);
  textSize(35);
  textAlign(CENTER,CENTER);
  text("indice", width/2, height/3 - 100);
  if(move ==false){
   text("medio", width/2 + 200, height/3-200);
 } else{
   text("medio", width/2 - 280, height/3-200);
 }

}


function Circle(_x, _y, _size){
  this.x = _x;
  this.y = _y;
  this.size = 100;

  this.move = function(){
    this.x = width/2-280;
  }

  this.display = function(){
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}
