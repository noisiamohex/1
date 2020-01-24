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
    $scope.p4 = true;
    $scope.p5 = true;
    document.getElementById("myInput").blur();
  }

  goBack = function(){
    document.getElementById("error").style.opacity = 0;
  }

  // goToPage = function(){
  //   var randPage = Math.random() * prove.lenght;
  //   randPage = parseInt(randPage, 10);
  //   var link = prove[randPage];
  //
  //   if(document.getElementById("myInput").value == ("salvami") || document.getElementById("myInput").value == ("Salvami")){
  //     window.open(link, "_self");
  //   } else{
  //     document.getElementById("error").style.opacity = 1;
  //   }
  // }
});

// document.getElementById("myInput").value == ("iocicredo")
// window.open('Prova 1/prova1.html', "_self");
