'use strict';

/**
 * @ngdoc function
 * @name ch02App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ch02App
 */
angular.module('ch02App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
