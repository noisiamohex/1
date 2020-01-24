var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);
// var el = document.getElementById("ok");

app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("myInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    $scope.p3 = true;
    $scope.p4 = true;
    document.getElementById("myInput").blur();
  }

  findIndizio = function(){
    document.getElementById("indizio").style.opacity = 1;
  }

});

// document.getElementById("myInput").value == ("iocicredo")
// window.open('Prova 1/prova1.html', "_self");
