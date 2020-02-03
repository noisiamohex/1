var font;
var ferro;
var value = 0;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 4/index_44mni.html";

var index = mini.indexOf(thisPage);

preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  ferro = loadImage("../assets/ferro.png");
}

setup = function(){
if (localStorage.mini4 == "false"){
  localStorage.setItem('totalScore', Number(localStorage.totalScore) - 150);
  localStorage.setItem('mini4', true);
}

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 700);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
   	background(0);

}


draw = function() {

  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }

  background(0);

  angleMode(DEGREES);
 push();
  translate(width/2, height/2);
  rotate(value);
  imageMode(CENTER);
  image(ferro, 0, 0, ferro.width/2, ferro.height/2);
  pop();

}

function ruotaFerro(){
  value += 45;

  if(value == 270){
    goToPage();
}
}

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
