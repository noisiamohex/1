var font;

var rispMeglio = ["qu4", "Qu4", "QU4"];
var rispPeggio = ["tr3", "Tr3", "TR3"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 5/index_prova5.html";

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

timer = 60;

function draw() {
  if (hour()==startOre && minute() >= (startMinuti + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != startOre && (minute() + 15) >= startMinuti){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }

  if(timer == 1){
}
