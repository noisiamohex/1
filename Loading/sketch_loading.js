var frasiSconce = [
  "POTEVI FARE MEGLIO",
  "CI ASPETTAVAMO DI PIÙ",
  "DEVI IMPEGNARVI DI PIÙ SE VUOI VIVERE",
  "BENE MA NON BENISSIMO",
  "FORSE NON STAI PRENDENDO QUESTA COSA ABBASTANZA SUL SERIO",
  "NON CI SIAMO, UN PO' PIÙ DI IMPEGNO",
  "COSÌ NON TI SALVERAI DI CERTO",
  "DEVI ESSERE PIÙ SUPERSTIZIOSO"
]

var index;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  index = (random(frasiSconce));
}

function draw() {
  select("#sconcio").html("> " + index);

  if(frameCount > 200){
    goToPage();
  }
}

function goToPage(){
    var randPage = random(mini);
    window.open(randPage, "_self");
}
