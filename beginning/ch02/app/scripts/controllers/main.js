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

    // add
    $scope.addNewTodo = function (newTitle) {
      $scope.todoList.push({done: false, title: newTitle});
      $scope.newTitle = '';
    }

    // archive
    $scope.archive = function () {
      for (var i = $scope.todoList.length - 1; i >= 0; i--) {
        if ($scope.todoList[i].done) {
          $scope.todoList.splice(i, 1);

        }
      }
    }

    // remain
    $scope.remain = function() {
      var remainCount = 0;
      angular.forEach($scope.todoList, function(value, key) {
        if (value.done === false) {
          remainCount++;
        }
      })
      return remainCount;
    }

  });
