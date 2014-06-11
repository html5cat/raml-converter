'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ConverterSource', ['$scope', function($scope) {
    $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      // readOnly: 'nocursor',
      mode: 'raml',
    };
  }])
  .controller('MyCtrl1', ['$scope', function($scope) {
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
  }]);
