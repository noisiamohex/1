var font;
var occhio;

var startMinuti;
var startOre;

preload = function() {
  font = loadFont("./assets/Cygnito Mono.ttf");
  occhio = loadImage("./assets/occhio.png");
}

setup = function() {
 startMinuti = minute();
 startOre = hour();

 myStorage = window.localStorage;
 localStorage.setItem('startMinuti', startMinuti);
 localStorage.setItem('startOre', startOre);
 localStorage.setItem('totalScore', 500);

}

draw = function() {

}
