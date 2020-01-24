var font;
var occhio;
var error;

var duration;

var dispScore;

var password;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png")
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

  console.log(totalScore);
  console.log(tempoScore);
  console.log(defScore);

  //file per tutti: ((scade il tempo - non tornare indietro)) - avoid rotation
  //https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock#Browser_compatibility
  //https://gist.github.com/callmephilip/3626669
  //https://medium.com/mirafra-sw-engineering/how-to-change-screen-orientation-with-javascript-9b82fca93d56

  //on refresh su miniprove viene sottratto punteggio

  //file per prove: collegamenti (rispGiusta e rispSbagliata)

  //file per provine: collegamenti

  //ritenta in miniprova 1 serve?

  //pulizia

  document.getElementById('mamt').innerHTML = dispScore+"AB"+duration;
}

function draw() {
}
