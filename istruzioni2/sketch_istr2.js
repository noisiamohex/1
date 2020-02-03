var font;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
}

function draw() {
  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
}

function findIndizio(){
  document.getElementById("indizio").style.opacity = 1;
}

function mousePressed(){
  document.getElementById("indizio").style.opacity = 0;
}

goToPage = function(){
  var randPage = (random(prove));
  window.open(randPage, "_self");
}
