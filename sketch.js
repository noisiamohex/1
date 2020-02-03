var font;

var startMinuti;
var startOre;

var listaProve = [
  "../Prova 1/index_1varpo.html",
  "../Prova 2/index_r2v.html",
  "../Prova 3/index_33.html",
  "../Prova 4/index_quvr.html",
  "../Prova 5/index_5pro5.html",
//  "../Prova 6/index_seseva.html",
  "../Prova 7/index_777rpor.html",
  "../Prova 8/index_prv8p.html"
]

var listaMiniProve = [
  "../Miniprova 1/index_mini1.html",
  "../Miniprova 2/index_mini2.html",
  "../Miniprova 3/index_mini3.html",
  "../Miniprova 4/index_mini4.html",
  "../Miniprova 5/index_mini5.html",
  "../Miniprova 6/index_mini6.html",
  "../Miniprova 7/index_mini7.html",
]

// var iOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//
// if (iOs == true){
//   listaProve.splice(5,1);
// }

preload = function() {
  font = loadFont("./assets/Cygnito Mono.ttf");
}

setup = function() {

 startMinuti = minute();
 startOre = hour();

 myStorage = window.localStorage;
 localStorage.setItem("listaProve", JSON.stringify(listaProve));
 localStorage.setItem("listaMiniProve", JSON.stringify(listaMiniProve));
 localStorage.setItem('startMinuti', startMinuti);
 localStorage.setItem('startOre', startOre);
 localStorage.setItem('stato', 0);
 localStorage.setItem('totalScore', 500);
 localStorage.setItem('mini1', false);
 localStorage.setItem('mini2', false);
 localStorage.setItem('mini3', false);
 localStorage.setItem('mini4', false);
 localStorage.setItem('mini5', false);
 localStorage.setItem('mini6', false);
 localStorage.setItem('mini7', false);
 localStorage.setItem('arrendo', false);
 localStorage.setItem('fortunata1', false);
 localStorage.setItem('fortunata2', false);
 localStorage.setItem('fortunata3', false);
}

draw = function() {
  if (hour()== Number(startOre) && minute() >= (Number(startMinuti) + 45)){
     window.open('Arrendo/index_arrendo.html', "_self");
 }
 if(hour() != Number(startOre) && (minute() + 15) >= Number(startMinuti)){
     window.open('Arrendo/index_arrendo.html', "_self");
 }
}
