var font;
var occhio;
var error;

var cisono;

var capture;

var xStart;
var xFin;
var yStart;
var yFin;

var sommaRed;
var sommaGreen;
var sommaBlue;

var percRed;
var percGreen;
var percBlue;

var stato = 0;

var bg;
var blend = 255;

var rispMeglio = ["00ff00", "00FF00"];
var rispPeggio = ["ff00ff", "Ff00ff", "FF00FF"];

var retrievedProve = localStorage.getItem('listaProve');

var prove = JSON.parse(retrievedProve);

var thisPage = "../Prova 6/index_prova6.html";

var index = prove.indexOf(thisPage);


function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png");
}

function setup() {
  if(index !== -1){
    prove.splice(index, 1);
  }

  localStorage.setItem("listaProve", JSON.stringify(prove));

  canvas = createCanvas(900, 700);
  canvas.position(tutto.width/2 - 450, 120);
  canvas.parent("tutto");

  capture = createCapture({
    video: {
      facingMode: "environment"
    }
  });

  cisono = createButton("[ CI SONO ]");
  cisono.position(tutto.width/2, height/2+330);

  capture.size(840, 500);
  capture.hide();

  xStart = width / 2 - capture.width/2 ;
  yStart = height / 2 - capture.height/2;
  xFin = width / 2 + capture.width/2;
  yFin = height / 2 + capture.height/2;
}

function openCamera() {
 cisono.style("display: none");
 select("#start").html("> si alza il sipario. che colore scegli?");
 blend = 0;
}

function draw() {

  cisono.mousePressed(openCamera);

  imageMode(CORNER);
  image(capture, xStart, yStart, capture.width, capture.height);

  getTot(xStart, yFin, yStart, yFin, 100);
  escePass();

  rectMode(CENTER);
  fill(0, blend);
  bg = rect(width / 2, height / 2, 840, 500);

  if (stato == 1) {
    fill(255, 0, 0);
    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("PASSWORD: 00FF00", width / 2, height / 2);
  } else if (stato == 2) {
    fill(255, 0, 0);
    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("PASSWORD: FF00FF", width / 2, height / 2);
  }

}

function getTot(_xStart, _xFin, _yStart, _yFin, _dim){

  var sommaRed = 0;
  var sommaGreen = 0;
  var sommaBlue = 0;

  for (var x = _xStart; x < _xFin; x += _dim) {
    for (var y = _yStart + 1; y < _yFin; y += _dim) {

      var color = get(x, y); //get the COLOR in the X an Y position

      var red = color[0];
      var green = color[1];
      var blue = color[2];

      sommaRed = sommaRed + red;
      sommaGreen = sommaGreen + green;
      sommaBlue = sommaBlue + blue;
    }

    var sommaTot = sommaRed + sommaGreen + sommaBlue

    percRed = (sommaRed*100) / sommaTot;
    percGreen = (sommaGreen*100) / sommaTot;
    percBlue = (sommaBlue*100) / sommaTot;
  }
}

function escePass(){
  if(percGreen > 50 && blend == 0){
    stato = 1;
  } else if((percBlue + percRed)/2 > 40 && blend == 0){
    stato = 2;
  }
}
