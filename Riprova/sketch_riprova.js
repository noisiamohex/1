var font;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
    localStorage.setItem('totalScore', Number(localStorage.totalScore) + 150);
}

function draw() {
  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
}

history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
}
