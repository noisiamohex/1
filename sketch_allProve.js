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

  if (rispMeglio.indexOf(document.getElementById("myInput").value) !== -1) {
    if (stato == 0) {
      localStorage.setItem('fortunata1', true);
      window.open('../Indizio 1/index_zn1.html', "_self");
    }
    if (stato == 1) {
      localStorage.setItem('fortunata2', true);
      window.open('../Indizio 2/index_2dn.html', "_self");
    }
    if (stato == 2) {
      localStorage.setItem('fortunata3', true);
      window.open('../Indizio 3/index_din3.html', "_self");
    }
  } else if (rispPeggio.indexOf(document.getElementById("myInput").value) !== -1) {
    window.open('../Loading/index_loading.html', "_self");
  } else {
    document.getElementById("error").style.opacity = 1;
  }
}
