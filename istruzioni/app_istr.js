var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);

app.controller('MainCtrl', function($scope, $timeout) {

  goToPage = function(){
    window.open('../Prova 0/index_prova0.html', "_self");
  }
});
