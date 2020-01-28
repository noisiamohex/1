var font;

var duration;

var dispScore;

var password;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {

  var startMinuti = localStorage.getItem('startMinuti');
  var startOre = localStorage.getItem('startOre');

  var endOre = hour();
  var endMinuti;

  if(endOre - startOre == 0){
    endMinuti = minute();
  } else if (endOre - startOre == 1) {
    endMinuti = minute() + 60;
  }

  var tempo = endMinuti - startMinuti;

  var totalScore = localStorage.getItem("totalScore");

  var tempoScore = 500 - (tempo*10);

  var defScore = Number(totalScore)+ Number(tempoScore);

  duration = ("00" + tempo).slice(-4);

  dispScore = ("0" + defScore).slice(-3);

  document.getElementById('mamt').innerHTML = dispScore+"AB"+duration;
}

function draw() {
}

history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
}
