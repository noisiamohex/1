var font;
var database;
var ref;

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

if(localStorage.arrendo == "false"){
  submitDeath();
}
}

function submitDeath(){
  var data = {
    death: 1
  }
  var deaths = database.ref('deaths');
  ref.push(data);
  localStorage.setItem('arrendo', true);
}

draw = function() {
}

history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
}
