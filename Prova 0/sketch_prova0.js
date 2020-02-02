var font;

var rispMeglio = ["salvami", "Salvami", "SALVAMI"];

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

function findIndizio(){
  document.getElementById("indizio").style.opacity = 1;
}

function mousePressed(){
    document.getElementById("indizio").style.opacity = 0;
    document.getElementById("error").style.opacity = 0;
}

goToPage = function(){

  if(rispMeglio.indexOf(document.getElementById("myInput").value) !== -1){
    window.open('../istruzioni2/index_istr2.html', "_self");
  } else{
    document.getElementById("error").style.opacity = 1;
  }
}
