var font;
var occhio;
var error;

var rispMeglio = ["sbagliato", "Sbagliato", "SBAGLIATO"];
var rispPeggio = ["giusto", "Giusto", "GIUSTO"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 7/index_prova7.html";

var index = prove.indexOf(thisPage);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png")
}

function setup() {
  if(index !== -1){
    prove.splice(index, 1);
  }

  localStorage.setItem("listaProve", JSON.stringify(prove));

}

function draw() {}
