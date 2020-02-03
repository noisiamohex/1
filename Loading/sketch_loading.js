var frasiSconce = [
  "POTEVI FARE MEGLIO",
  "CI ASPETTAVAMO DI MEGLIO",
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

var endLoading = false;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {
  index = (random(frasiSconce));
}

function draw() {
  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('../Arrendo/index_arrendo.html', "_self");
 }

  select("#sconcio").html("> " + index);

  if(frameCount > 200 && endLoading == false){
    goToPage();
    endLoading = true;
  }
}

function goToPage(){
    var randPage = random(mini);
    window.open(randPage, "_self");
}
