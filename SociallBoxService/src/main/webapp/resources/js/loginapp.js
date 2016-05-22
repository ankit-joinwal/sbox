'use strict';

angular.module('index', []);
angular.module('Authentication', []);

var App = angular.module('login',['ngRoute','ui.bootstrap','dialogs.main','ngCookies','index','Authentication']);

App.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: '/',
			controller : "IndexController"
		})
		.when('/terms', {
			templateUrl: '/terms',
			controller : "IndexController"
		})
		.when('/policy', {
			templateUrl: '/policy',
			controller : "IndexController"
		})
		.when('/eo', {
			templateUrl: '/',
			controller : "IndexController"
		})
		.when('/eo/login', {
			controller : "AuthController",
			templateUrl: '/eo/login'
		})
		.when('/eo/home', {
			templateUrl: '/eo/home',
			controller : "IndexController"
		})
		.otherwise({redirectTo:'/'});		
}]);
