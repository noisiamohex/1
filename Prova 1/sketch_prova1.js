var font;
var occhio;
var error;

var rispMeglio = ["sopracampa", "Sopracampa", "SOPRACAMPA"];
var rispPeggio = ["sottocrepa", "Sottocrepa", "SOTTOCREPA"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 1/index_prova1.html";

var index = prove.indexOf(thisPage);

var stato = localStorage.getItem('stato');


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png");
}

function setup() {
  if(index !== -1){
    prove.splice(index, 1);
  }

  localStorage.setItem("listaProve", JSON.stringify(prove));
}

function draw() {
}
