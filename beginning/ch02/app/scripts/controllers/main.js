'use strict';

/**
 * @ngdoc function
 * @name ch02App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ch02App
 */
//angular.module('ch02App')
//  .controller('MainCtrl', function ($scope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

angular.module('todoApp')
  .controller('todoController', function ($scope) {
    $scope.todoList = [
      {done: true, title: 'AngularJS 독서'},
      {done: false, title: 'AngularJS 공부하기'},
      {done: false, title: '개인 프로젝트 구성'}
    ]
    $scope.appName = 'AngularJS TODO APP';
  });
