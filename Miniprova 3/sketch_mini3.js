var font;
var tocc;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var thisPage = "../Miniprova 3/index_mini3.html";

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

   	canvas = createCanvas(900, 1000);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);

    advice = createButton("Ferro");
    advice.style("font-size: 50px");
    advice.mousePressed(goTo);
}

draw = function() {
}

function goTo(){
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

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
