// Module
var forecastApp = angular.module('forecastApp',['ngRoute','ngResource']);

//adicionar URL do openweatherAPI na whitelist
forecastApp.config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(['self','http://openweathermap.org/data/2.5/weather']);
});

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
    this.city = 'Recife,BR';
})

//Controllers
forecastApp.controller('homeController',['$scope','cityService', function($scope, cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })

}]);

forecastApp.controller('forecastController', ['$scope','$resource','cityService', function($scope, $resource, cityService){
    $scope.city = cityService.city;

    $scope.weatherAPI = $resource('http://openweathermap.org/data/2.5/weather', { get: { method: "JSONP"} });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, appid: "b6907d289e10d714a6e88b30761fae22"});
    
    window.console.log($scope.weatherResult);
}]);