var retrievedMiniProve = localStorage.getItem('listaMiniProve');

var mini = JSON.parse(retrievedMiniProve);

var stato = localStorage.getItem('stato');

preload = function() {
}

setup = function() {
}

draw = function() {
}

function findIndizio(){
  document.getElementById("indizio").style.opacity = 1;
}

function mousePressed(){
  document.getElementById("error").style.opacity = 0;
  document.getElementById("indizio").style.opacity = 0;
}

function goToPage() {
  var randPage = random(mini);

  if (rispMeglio.indexOf(document.getElementById("myInput").value) !== -1) {
    if (stato == 0) {
      window.open('../Indizio 1/index_indizio1.html', "_self");
    }
    if (stato == 1) {
      window.open('../Indizio 2/index_indizio2.html', "_self");
    }
    if (stato == 2) {
      window.open('../Indizio 3/index_indizio3.html', "_self");
    }
  } else if (rispPeggio.indexOf(document.getElementById("myInput").value) !== -1) {
    window.open(randPage, "_self");
  } else {
    document.getElementById("error").style.opacity = 1;
  }
}
