var frasiSconce = [
  "POTEVATE FARE MEGLIO",
  "CI ASPETTAVAMO DI PIÙ",
  "DOVETE IMPEGNARVI DI PIÙ SE VOLETE VIVERE",
  "BENE MA NON BENISSIMO",
  "FORSE NON STATE PRENDENDO QUESTA COSA ABBASTANZA SUL SERIO",
  "NON CI SIAMO, UN PO' PIÙ DI IMPEGNO",
  "COSÌ NON VI SALVERETE DI CERTO",
  "SIATE PIÙ SUPERSTIZIOSI"
]

var index;

var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  index = round(random(frasiSconce.length));
}

function draw() {
  select("#sconcio").html("> " + frasiSconce[index]);

  if(frameCount > 200){
    goToPage();
  }
}

function goToPage(){
    var randPage = round(random(mini));
    window.open(randPage, "_self");
}
