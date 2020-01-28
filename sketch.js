var font;
var occhio;

var startMinuti;
var startOre;

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

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
 localStorage.setItem('mini1', false);
 localStorage.setItem('mini2', false);
 localStorage.setItem('mini3', false);
 localStorage.setItem('mini4', false);
 localStorage.setItem('mini5', false);
 localStorage.setItem('mini6', false);
 localStorage.setItem('mini7', false);
 localStorage.setItem('arrendo', false);
}

draw = function() {

}
