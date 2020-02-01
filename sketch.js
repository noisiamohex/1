var font;

var startMinuti;
var startOre;

var listaProve = [
  "../Prova 1/index_prova1.html",
  "../Prova 2/index_prova2.html",
  "../Prova 3/index_prova3.html",
  "../Prova 4/index_prova4.html",
  "../Prova 5/index_prova5.html",
  "../Prova 6/index_prova6.html",
  "../Prova 7/index_prova7.html",
  "../Prova 8/index_prova8.html"
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

var iOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOs == true){
  listaProve.splice(5,1);
}

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

}
