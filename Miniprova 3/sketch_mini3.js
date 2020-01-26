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
if (localStorage.mini3 == "false"){
  localStorage.setItem('totalScore', localStorage.totalScore - 150);
  localStorage.setItem('mini3', true);
}

    if(index !== -1){
      mini.splice(index, 1);
    }

    localStorage.setItem("listaMiniProve", JSON.stringify(mini));

   	canvas = createCanvas(900, 1000);
    canvas.position(windowWidth/2 - 450, windowHeight/2 - 500);

    advice = createButton("Ferro");
    advice.style("font-size: 50px");
    advice.mousePressed(goToPage);
}

draw = function() {
}

//define that the page will not slide when touched
function touchMoved() {
  return false;
}
