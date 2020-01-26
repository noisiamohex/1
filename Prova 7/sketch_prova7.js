var font;
var occhio;
var error;

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

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var stato = localStorage.getItem('stato');


goToPage = function(){
var randPage = random(mini);

if(document.getElementById("myInput").value == ("sbagliato") || document.getElementById("myInput").value == ("Sbagliato")){
  if (stato == 0) {
    window.open('../Indizio 1/index_indizio1.html', "_self");
  }
  if (stato == 1) {
    window.open('../Indizio 2/index_indizio2.html', "_self");
  }
  if (stato == 2) {
    window.open('../Indizio 3/index_indizio3.html', "_self");
  }
} else if(document.getElementById("myInput").value == ("giusto") || document.getElementById("myInput").value == ("Giusto")){
  window.open(randPage, "_self");
}
else{
  document.getElementById("error").style.opacity = 1;
}
}
