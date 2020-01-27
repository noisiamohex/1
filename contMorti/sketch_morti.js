var font;
var occhio;
var database;
var ref;
var numero;

preload = function() {
  font = loadFont("../assets/Cygnito Mono.ttf");
}

setup = function() {
  var firebaseConfig = {
   apiKey: "AIzaSyBf2NzGjxtxa09sof9nX9Gcag11c2XHa58",
   authDomain: "countermorti.firebaseapp.com",
   databaseURL: "https://countermorti.firebaseio.com",
   projectId: "countermorti",
   storageBucket: "countermorti.appspot.com",
   messagingSenderId: "695868179199",
   appId: "1:695868179199:web:2a6c5e8717e05bf95342ca",
   measurementId: "G-GQFSJCRS9G"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

database = firebase.database();
ref = database.ref('deaths');

ref.on('value', gotData, errData);

canvas = createCanvas(windowWidth, windowHeight);
}

function gotData(data){
  var deaths = data.val();
  var keys = Object.keys(deaths);
  numero = ("00" + keys.length).slice(-3);
  //console.log(numero);
}

function errData(err){
  console.log('error');
    console.log(err);
}

draw = function() {
  background(0);
  textFont(font);
  fill(255,0,0);
  textAlign(CENTER,CENTER)
  push();
  textSize(300);
  text(numero, width/2, height*5/9 + 50);
  pop();
  textSize(75);
  text("I MORTI DI OGGI", width/2, height*4/9 - 70);
}
