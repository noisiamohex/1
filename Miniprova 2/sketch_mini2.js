var font;
var calend;
var tred;
var bin;

var obst;

var obstacle;

var endLoading = false;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 2/index_2m2i.html";

var index = mini.indexOf(thisPage);

preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  calend = loadImage("../assets/calend.png");
  tred = loadImage("../assets/13.png")
  bin = loadImage("../assets/bin.png")
}

setup = function(){
  if (localStorage.mini2 == "false"){
    localStorage.setItem('totalScore', Number(localStorage.totalScore) - 150);
    localStorage.setItem('mini2', true);
  }

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 900);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
   	background(0);

    obstacle = new Obst(800, 800);
}

draw = function() {

  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }

  background(0);
  imageMode(CENTER);
  image(calend, width/2, height/2 - 40, calend.width*5/11, calend.height*5/11);

  var toccoX = width/2 + 134;
  var toccoY = height/2 - 90;

  if (touches.length > 0) {
    toccoX = touches[0].x;
    toccoY = touches[0].y;
    image(tred, touches[0].x - 70, touches[0].y, tred.width*2, tred.height*2);
  } else {
    image(tred, toccoX, toccoY, tred.width/2, tred.height/2);
  }

  for (var i = 0; i < touches.length; i++) {
    image(tred, touches[i].x - 70, touches[i].y, tred.width*2, tred.height*2);
  }

  obstacle.display();

  var d = dist(toccoX, toccoY, obstacle.x, obstacle.y);

  if(d < 50 && endLoading == false){
    goToPage();
    endLoading = true;
}
}

function Obst(_x, _y){
  this.x = _x;
  this.y = _y;

  this.display = function(){
    image(bin, this.x, this.y, bin.width/2, bin.height/2)
  }
}

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
