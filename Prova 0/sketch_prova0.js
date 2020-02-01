var font;

var rispMeglio = ["salvami", "Salvami", "SALVAMI"];

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
}

function draw() {

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
