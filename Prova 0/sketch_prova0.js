var font;

var rispMeglio = ["salvami", "Salvami", "SALVAMI"];

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  var prove = [
  "../Prova 1/index_prova1.html",
  "../Prova 2/index_prova2.html",
  "../Prova 3/index_prova3.html",
  "../Prova 4/index_prova4.html",
  "../Prova 5/index_prova5.html",
  "../Prova 6/index_prova6.html",
  "../Prova 7/index_prova7.html",
  "../Prova 8/index_prova8.html"];

  if(iOS == true){
    prove.splice(5, 1);
  }

var mini = [
  "../Miniprova 1/index_mini1.html",
  "../Miniprova 2/index_mini2.html",
  "../Miniprova 3/index_mini3.html",
  "../Miniprova 4/index_mini4.html",
  "../Miniprova 5/index_mini5.html",
  "../Miniprova 6/index_mini6.html",
  "../Miniprova 7/index_mini7.html"];

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

function setup() {

  myStorage = window.localStorage;

  localStorage.setItem("listaProve", JSON.stringify(prove));
  localStorage.setItem("listaMiniProve", JSON.stringify(mini));

}

function draw() {

}

function findIndizio(){
  document.getElementById("indizio").style.opacity = 1;
}

function mousePressed(){
//  document.getElementById("indizio").style.opacity = 0;
    document.getElementById("error").style.opacity = 0;
}

goToPage = function(){

  var randPage = (random(prove));

  if(rispMeglio.indexOf(document.getElementById("myInput").value) !== -1){
    window.open(randPage, "_self");
  } else{
    document.getElementById("error").style.opacity = 1;
  }
}
