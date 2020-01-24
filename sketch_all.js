var startOre = localStorage.getItem("startOre");
var startMinuti = localStorage.getItem("startMinuti");

preload = function() {
}

setup = function() {
}

draw = function() {
  if (hour()==startOre && minute() >= (startMinuti + 45)){
      window.open('../Arrendo/index_arrendo.html', "_self");
  }
  if(hour() != startOre && (minute() + 15) >= startMinuti){
      window.open('../Arrendo/index_arrendo.html', "_self");
  }
}

history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
}

screenOrientation.lock(PORTRAIT);
