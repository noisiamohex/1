var font;

var indice;
var medio;

var move = false;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 6/index_p6r6on.html";

var index = mini.indexOf(thisPage);

preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
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

    indice = new Circle(width/2, height/3);
    medio = new Circle(width/2 + 200, height/3-100);
}

draw = function() {

  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }

  background(0);

  indice.display();
  medio.display();

  if(touches.length == 2){
    medio.move();
    move = true;
  }

for (var i = 0; i < touches.length; i++){
  var d = dist(touches[i].x, touches[i].y, width/2 - 120, height/3 - 200);
};

  if(touches.length == 2 && d < 200 && move == true){
    goToPage();
    move = false;
  }

  textFont(font);
  textSize(35);
  textAlign(CENTER,CENTER);
  text("indice", width/2, height/3 - 100);
  if(move ==false){
   text("medio", width/2 + 200, height/3 - 200);
 } else{
   text("medio", width/2 - 120, height/3 - 200);
 }

}


function Circle(_x, _y, _size){
  this.x = _x;
  this.y = _y;
  this.size = 100;

  this.move = function(){
    this.x = width/2 - 120;
  }

  this.display = function(){
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}
