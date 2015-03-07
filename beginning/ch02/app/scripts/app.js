'use strict';

/**
 * @ngdoc overview
 * @name ch02App
 * @description
 * # ch02App
 *
 * Main module of the application.
 */
//angular
//  .module('ch02App', [
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
//    'ngRoute',
//    'ngSanitize',
//    'ngTouch'
//  ])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });


angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
