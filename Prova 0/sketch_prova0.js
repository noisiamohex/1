var font;
var occhio;
var error;

var prove = [
  "../Prova 1/index_prova1.html",
  "../Prova 2/index_prova2.html",
  "../Prova 3/index_prova3.html",
  "../Prova 4/index_prova4.html",
  "../Prova 5/index_prova5.html",
  "../Prova 6/index_prova6.html",
  "../Prova 7/index_prova7.html",
  "../Prova 8/index_prova8.html"];

var mini = [
  "../Miniprova 1/index_mini1.html",
  "../Miniprova 2/index_mini2.html",
  "../Miniprova 3/index_mini3.html",
  "../Miniprova 4/index_mini4.html",
  "../Miniprova 5/index_mini5.html",
  "../Miniprova 6/index_mini6.html",
  "../Miniprova 7/index_mini7.html"];


var stato = localStorage.setItem('stato', 0);

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png");
}

function setup() {

  myStorage = window.localStorage;

  localStorage.setItem("listaProve", JSON.stringify(prove));
  localStorage.setItem("listaMiniProve", JSON.stringify(mini));

}

function draw() {

}

function mousePressed(){
  document.getElementById("error").style.opacity = 0;
}

goToPage = function(){

  var randPage = random(prove);

  if(document.getElementById("myInput").value == ("salvami") || document.getElementById("myInput").value == ("Salvami")){
    window.open(randPage, "_self");
  } else{
    document.getElementById("error").style.opacity = 1;
  }
}
