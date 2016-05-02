'use strict';

//Declare Modules
angular.module('Admin', []);

var App = angular.module('sociallboxadmin',['ngRoute','ngCookies','angularUtils.directives.dirPagination','Admin']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : "AdminController",
			templateUrl: '/SociallBox/nimda/organizers'
		})
		.when('/organizers', {
			controller : "AdminController",
			templateUrl: '/SociallBox/nimda/organizers'
		})
		.when('/organizers/:profileId', {
            controller: 'AdminController',
            templateUrl: '/SociallBox/nimda/organizers/detail'
        })
        .when('/organizerlist', {
			controller : "AdminController",
			templateUrl: '/SociallBox/nimda/organizers/search'
		})
		.when('/events/:eventId', {
            controller: 'AdminController',
            templateUrl: '/SociallBox/nimda/events/details'
        })
		.otherwise({redirectTo:'/'});		
}]);


