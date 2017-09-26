var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/harry.html',
        controller: 'PotterController',
        controllerAs: 'pc'

    }).when('/hermione', {
        templateUrl: 'views/hermione.html',
        controller: 'HermioneController',
        controllerAs: 'hc'

    }).when('/ron', {
        templateUrl: 'views/ron.html',
        controller: 'RonController',
        controllerAs: 'rc'
    }).otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode(true);
  });