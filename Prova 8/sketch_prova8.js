var font;

var rispMeglio = ["<o>", "<O>"];
var rispPeggio = ["<->"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 8/index_prova8.html";

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
