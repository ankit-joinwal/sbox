'use strict';

//Declare Modules
angular.module('Admin', []);

var App = angular.module('sociallboxadmin',['ngRoute','ngCookies','smart-table','Admin']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : "AdminController",
			templateUrl: '/nimda/organizers'
		})
		.when('/organizers', {
			controller : "AdminController",
			templateUrl: '/nimda/organizers'
		})
		.when('/organizers/:profileId', {
            controller: 'AdminController',
            templateUrl: '/nimda/organizers/detail'
        })
        .when('/organizerlist', {
			controller : "AdminController",
			templateUrl: '/nimda/organizers/search'
		})
		.when('/events/:eventId', {
            controller: 'AdminController',
            templateUrl: '/nimda/events/details'
        })
		.otherwise({redirectTo:'/'});		
}]);


