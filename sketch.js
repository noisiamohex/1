var font;
var occhio;

var startMinuti;
var startOre;

locOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock || orientation.lock;
locOrientation("portrait");

// var lockFunction =  window.screen.orientation.lock;
// if (lockFunction.call(window.screen.orientation, 'landscape')) {
//            console.log('Orientation locked')
//         } else {
//             console.error('There was a problem in locking the orientation')
//         }

preload = function() {
  font = loadFont("./assets/Cygnito Mono.ttf");
  occhio = loadImage("./assets/occhio.png");
}

setup = function() {
 startMinuti = minute();
 startOre = hour();

 myStorage = window.localStorage;
 localStorage.setItem('startMinuti', startMinuti);
 localStorage.setItem('startOre', startOre);
 localStorage.setItem('totalScore', 500);
 localStorage.setItem('mini1', false);
 localStorage.setItem('mini2', false);
 localStorage.setItem('mini3', false);
 localStorage.setItem('mini4', false);
 localStorage.setItem('mini5', false);
 localStorage.setItem('mini6', false);
 localStorage.setItem('mini7', false);
 localStorage.setItem('arrendo', false);
}

draw = function() {

}
