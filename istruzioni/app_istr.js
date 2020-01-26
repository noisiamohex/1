var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);

app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("idInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    $scope.p12 = true;
    document.getElementById("idInput").blur();
  }

  goToPage = function(){
    window.open('../Prova 0/index_prova0.html', "_self");
  }
});
