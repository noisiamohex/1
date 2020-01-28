var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);
app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("myInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    document.getElementById("myInput").blur();
  }

});
