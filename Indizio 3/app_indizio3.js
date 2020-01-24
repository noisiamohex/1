var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);

app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("myInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    $scope.p8 = true;
    document.getElementById("myInput").blur();
  }

  // goToPage = function(){
  //   if(document.getElementById("myInput").value == ("iocicredo")){
  //     window.open('../Indizio 1/index_indizio1.html', "_self");
  //   } else if(document.getElementById("myInput").value == ("iono")){
  //     window.open('../Miniprova 1/index_mini1.html', "_self");
  //   } else{
  //     document.getElementById("error").style.opacity = 1;
  //   }
  // }

  history.pushState(null, null, location.href);
  history.back();
  history.forward();
  window.onpopstate = function () {
    history.go(1);
  }

});
