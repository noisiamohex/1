var font;
var ferro;
var value = 0;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 4/index_mini4.html";

var index = mini.indexOf(thisPage);


var stato = localStorage.getItem('stato');


preload = function(){
  font = loadFont("../assets/Cygnito Mono.ttf");
  ferro = loadImage("../assets/ferro.png");
}

setup = function(){
    localStorage.setItem('totalScore', localStorage.totalScore - 150);

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 700);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);
   	background(0);

}


draw = function() {

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
}

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
