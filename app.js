// Module
var forecastApp = angular.module('forecastApp',['ngRoute']);

//Rotas
forecastApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
})

//Controllers
forecastApp.controller('homeController',['$scope', function($scope){

}]);

forecastApp.controller('forecastController', ['$scope', function($scope){

}]);