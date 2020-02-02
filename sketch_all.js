var startOre = localStorage.getItem("startOre");
var startMinuti = localStorage.getItem("startMinuti");

preload = function() {
}

setup = function() {
}

draw = function() {
}

history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
}
