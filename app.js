// Module
var forecastApp = angular.module('forecastApp',['ngRoute','ngResource']);

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

//Services
forecastApp.service('cityService', function(){
    this.city = 'Recife, Pernambuco';
})

//Controllers
forecastApp.controller('homeController',['$scope','cityService', function($scope, cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
}]);

forecastApp.controller('forecastController', ['$scope','cityService', function($scope, cityService){
    $scope.city = cityService.city;
}]);