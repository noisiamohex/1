var font;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
}

function draw() {
  if (hour()==startOre && minute() >= (startMinuti + 45)){
      window.open('../Arrendo/index_arrendo.html', "_self");
  }
  if(hour() != startOre && (minute() + 15) >= startMinuti){
      window.open('../Arrendo/index_arrendo.html', "_self");
  }
}
