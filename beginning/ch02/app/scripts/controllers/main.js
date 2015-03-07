'use strict';

/**
 * @ngdoc function
 * @name ch02App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ch02App
 */
angular.module('ch02App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
