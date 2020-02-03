var font;

var duration;

var dispScore;

var password;

var startMinuti = localStorage.getItem('startMinuti');
var startOre = localStorage.getItem('startOre');

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
    if(localStorage.fortunata3 == "true"){
        select("#header").html("> PASSWORD FORTUNATA INSERITA");
    }

  var endOre = hour();
  var endMinuti;

  if(endOre - startOre == 0){
    endMinuti = minute();
  } else if (endOre - startOre == 1) {
    endMinuti = minute() + 60;
  }

  var tempo = endMinuti - Number(startMinuti);

  var totalScore = localStorage.getItem("totalScore");

  var tempoScore = 500 - (tempo*10);

  var defScore = Number(totalScore)+ Number(tempoScore);

  duration = ("00" + tempo).slice(-3);

  dispScore = ("0" + defScore).slice(-3);

  document.getElementById('mamt').innerHTML = dispScore+"RJ7"+duration;
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
