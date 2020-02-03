var stato = localStorage.getItem('stato');

preload = function() {
}

setup = function() {
}

draw = function() {
}

function goToPage() {
    if (stato == 0) {
      window.open('../Indizio 1/index_zn1.html', "_self");
    }
    if (stato == 1) {
      window.open('../Indizio 2/index_2dn.html', "_self");
    }
    if (stato == 2) {
      window.open('../Indizio 3/index_din3.html', "_self");
    }
}
