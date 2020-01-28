var font;

var rispMeglio = ["iivx", "Iivx", "IIVX"];
var rispPeggio = ["xvii", "Xvii", "XVII"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 2/index_prova2.html";

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

function draw() {}
