var font;

var rispMeglio = ["sopracampa", "Sopracampa", "SOPRACAMPA"];
var rispPeggio = ["sottocrepa", "Sottocrepa", "SOTTOCREPA"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 1/index_prova1.html";

var index = prove.indexOf(thisPage);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  if(index !== -1){
    prove.splice(index, 1);
  }

  localStorage.setItem("listaProve", JSON.stringify(prove));
}

timer = 60;

function draw() {
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }

  if(timer == 1){
    document.getElementById("indizio").style.opacity = 1;
  }
}

function mousePressed(){
  document.getElementById("indizio").style.opacity = 0;
}
