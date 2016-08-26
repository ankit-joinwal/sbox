'use strict';

//Declare Modules
angular.module('index', []);
angular.module('Authentication', []);
angular.module('Dashboard', []);
angular.module('Company', []);
angular.module('Events', ['textAngular','angularjs-datetime-picker']);



var App = angular.module('sociallbox',['ui.bootstrap',
                                       'dialogs.main',
                                       'smart-table','textAngular',
                                       'angularjs-datetime-picker',
                                       'ngRoute',
                                       'ngCookies',
                                       'index',
                                       'Authentication',
                                       'Dashboard',
                                       'Company',
                                       'Events']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : "DashboardController",
			templateUrl: '/eo/dashboard'
		})
		.when('/dashboard', {
			controller : "DashboardController",
			templateUrl: '/eo/dashboard'
		})
		.when('/profile', {
			controller : "AuthController",
			templateUrl: '/eo/profile'
		})
		.when('/company', {
			controller : "CompanyController",
			templateUrl: '/eo/company'
		})
		.when('/company/new', {
			controller : "CompanyController",
			templateUrl: '/eo/company/new'
		})
		.when('/events', {
			controller : "EventsController",
			templateUrl: '/eo/events/list'
		})
		.when('/events/new', {
			controller : "EventsController",
			templateUrl: '/eo/events/new'
		})
		.when('/events/:eventId', {
            controller: 'EventsController',
            templateUrl: '/eo/events/details'
		})
		.otherwise({redirectTo:'/'});		
}]);

App.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

App.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
				 var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.lat();
                var longitude = geoComponents.geometry.location.lng();
				
				scope.meetup_address_components = geoComponents.address_components;
				scope.event_address_components = geoComponents.address_components;
				scope.meetup_place_lat = latitude;
				scope.meetup_place_lng = longitude;
				scope.event_place_lat = latitude;
				scope.event_place_lng = longitude;
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});

