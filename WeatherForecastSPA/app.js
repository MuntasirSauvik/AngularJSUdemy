// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController',
  })

  .when('/', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController',
  })

})

//CONTAINER
weatherApp.controller('homeController', ['$scope', function($scope) {

}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {

}]);
