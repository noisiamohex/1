var font;

var stato = localStorage.setItem('stato', 1);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  if(localStorage.fortunata1 == "true"){
      select("#header").html("> PASSWORD FORTUNATA INSERITA");
  }
}

function draw() {
  if (hour()==startOre && minute() >= (startMinuti + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != startOre && (minute() + 15) >= startMinuti){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
}

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

goToPage = function(){

  var randPage = (random(prove));

  window.open(randPage, "_self");
}
