var font;
var occhio;
var error;

var stato = localStorage.setItem('stato', 2);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png")
}

function setup() {

}

function draw() {
}

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

goToPage = function(){

  var randPage = random(prove);

  window.open(randPage, "_self");
}
