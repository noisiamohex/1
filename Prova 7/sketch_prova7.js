var font;

var rispMeglio = ["sbagliato", "Sbagliato", "SBAGLIATO"];
var rispPeggio = ["giusto", "Giusto", "GIUSTO"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 7/index_777rpor.html";

var index = prove.indexOf(thisPage);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  if(index !== -1){
    prove.splice(index, 1);
  }

  localStorage.setItem("listaProve", JSON.stringify(prove));

  select("#nProva").html("PROVA " + (Number(localStorage.stato)+1) + " / 3" );

}

function draw() {

if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
   window.open('../Arrendo/index_arrendo.html', "_self");
}
if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
   window.open('../Arrendo/index_arrendo.html', "_self");
}
}
