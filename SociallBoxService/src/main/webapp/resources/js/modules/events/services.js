'use strict';

var app = angular.module('Events');

app.factory('EventService',
	    [ '$http', '$cookieStore', '$rootScope','$q','AuthenticationService',
	    function ($http, $cookieStore, $rootScope, $q,AuthenticationService) {
	    	var service = {};
	    	
	   	 service.myevents_upcoming = function(userId,page){
	 			var deferred = $q.defer();
	 			var myeventsURL = "/api/secured/users/organizers/admins/"+userId+"/events?timeline=upcoming&page="+page;
	 			return AuthenticationService.getAuthToken()
	    		.then(function(tokenResponse){
	    			//Extract epoch time and token from response
	    			var epoch = tokenResponse.epoch;
	    			var token = tokenResponse.token;
	    			return $http({
	 	 				method:'GET',
	 	 				url: myeventsURL,
	 	 	            headers: {
	 	 	                    "Content-Type"		: 	"application/json",
	 	 						"accept"			:	"application/json",
	 	 	                    "X-Login-Ajax-call"	: 	'true',
	 	 	                    "Authorization"		:	token , 
		 	                    "X-Auth-Date" 		: 	epoch
	 	 	            }
	 	    		 })
	 	    		 .then(function(response) {
		                 if (response.status == 200) {
		                	 console.log('My events in:'+response.status);
		                	 deferred.resolve(response);
		 					 return deferred.promise;
		                 }
	 	    		 }).catch(function(response){
	 	    			 console.log('Unable to get my events data . Response :'+response.status);
	 	    			 deferred.reject(response);
	 					 return deferred.promise;
	 	    		});
	    		}).catch(function(tokenResponse){
	    			//If unable to get auth token, then redirect to login page
	    			console.log('Unable to gen token in AdminService.getPendingProfiles.Response :'+tokenResponse.status);
	    			
	    		});
	 		 };
	 		 
	 		 service.myevents_past = function(userId,page){
		 			var deferred = $q.defer();
		 			var myeventsURL = "/api/secured/users/organizers/admins/"+userId+"/events?timeline=past&page="+page;
		 			return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			return $http({
		 	 				method:'GET',
		 	 				url: myeventsURL,
		 	 	            headers: {
		 	 	                    "Content-Type"		: 	"application/json",
		 	 						"accept"			:	"application/json",
		 	 	                    "X-Login-Ajax-call"	: 	'true',
		 	 	                    "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
		 	 	            }
		 	    		 })
		 	    		 .then(function(response) {
			                 if (response.status == 200) {
			                	 //console.log('My events past in:'+response.status);
			                	 deferred.resolve(response);
			 					 return deferred.promise;
			                 }
		 	    		 }).catch(function(response){
		 	    			 console.log("Unable to get my events past data . Response :"+response.status);
		 	    			 deferred.reject(response);
		 					 return deferred.promise;
		 	    		});
		    		}).catch(function(tokenResponse){
		    			//If unable to get auth token, then redirect to login page
		    			console.log('Unable to gen token in AuthenticationService.Response :'+tokenResponse.status);
		    			
		    		});
		 		 };
	 		 
		 		service.createEvent = function(createEventRequest){
		    		var deferred = $q.defer();
		    		var createEventURL = "/api/secured/events";
		    		return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			
		    			//Make API call to create company
		    			return $http({
		 	 				method:'POST',
		 	 				url: createEventURL,
		 	 	            data: createEventRequest,
		 	 	            headers: {
		 	 	                    "Content-Type"		: 	"application/json",
		 	 		 				"accept"			:	"application/json",
		 	 	                    "X-Login-Ajax-call"	: 	'true',
		 	 	                    "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
		 	 	            }
		 	    		 }).then(function(response) {
		 	                 if (response.status == 201) {
		 	                 	deferred.resolve(response);
		 	                 	console.log('Event created'+response.status)
		 	 					return deferred.promise;
		 	                 }else{
		 	                	 
		 	 					 deferred.reject(response);
		 	 					 return deferred.promise;
		 	                 }
		 	             });
		    		}).catch(function(response){
		    			//If unable to get auth token, then redirect to login page
		    			console.log('Inside EventService.createEvent to gen token.Response :'+response.status);
		    		});
		    	};
		    	
		    	
		    	service.uploadEventPhoto = function(eventId,eventPic){
		    		var deferred = $q.defer();
		    		var uploadUrl ="/api/secured/events/"+eventId+"/images";
		    		return AuthenticationService.getAuthToken()
				    		.then(function(tokenResponse){
					    			//Extract epoch time and token from response 
					    			var epoch = tokenResponse.epoch;
					    			var token = tokenResponse.token;
					    			 var fd = new FormData();
				    		        fd.append('files', eventPic);
				    		        return $http.post(uploadUrl, fd, {
				    		            transformRequest: angular.identity,
				    		            headers: {'Content-Type': undefined, "X-Login-Ajax-call"	: 	'true',"accept"			:	"application/json",
				 	 	                    "Authorization"		:	token , 
					 	                    "X-Auth-Date" 		: 	epoch}
				    		        })
				    		        .then(function(uploadResponse) {
				    		        	if (uploadResponse.status == 201) {
					 	                 	deferred.resolve(uploadResponse);
					 	 					return deferred.promise;
				    		        	}else{
					 	                	 
					 	 					 deferred.reject(uploadResponse);
					 	 					 return deferred.promise;
				    		        	}
				    		        })
				    		        .catch(function(uploadResponse){
				    	    			//If unable to get auth token, then redirect to login page
				    	    			console.log('Inside EventService.uploadeventPic to upload pic.Response :'+tokenResponse.status);
				    	    			 deferred.reject(uploadResponse);
				 	 					 return deferred.promise;
				    	    		});
				    		}).catch(function(tokenResponse){
				    			//If unable to get auth token, then redirect to login page
				    			console.log('Inside CompanyService.uploadCompanyPhoto to gen token.Response :'+tokenResponse.status);
				    			deferred.reject(response);
				 				return deferred.promise;
				    		});
		    	};
		    	
		    	service.getAllTags = function(){
		    		var deferred = $q.defer();
		 			var tagsUrl = "/api/public/events/tags";
		 			
		    			return $http({
		 	 				method:'GET',
		 	 				url: tagsUrl,
		 	 	            headers: {
		 	 	                    "Content-Type"		: 	"application/json",
		 	 						"accept"			:	"application/json",
		 	 	                    "X-Login-Ajax-call"	: 	'true'
		 	 	            }
		 	    		 })
		 	    		 .then(function(response) {
			                 if (response.status == 200) {
			                	 //console.log('My events past in:'+response.status);
			                	 deferred.resolve(response);
			 					 return deferred.promise;
			                 }
		 	    		 }).catch(function(response){
		 	    			 console.log("Unable to get all tags . Response :"+response.status);
		 	    			 deferred.reject(response);
		 					 return deferred.promise;
		 	    		});
		    		
		    	};
		    	
		    	service.getEventDetails = function(userId,eventId){
		 			var deferred = $q.defer();
		 			var eventDetailsUrl = "/api/secured/users/organizers/admins/"+userId+"/events/"+eventId;
		 			return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			
		    			return $http({
		 	 				method:'GET',
		 	 				url: eventDetailsUrl,
		 	 	            headers: {
		 	 	                    "Content-Type"		: 	"application/json",
		 	 						"accept"			:	"application/json",
		 	 	                    "X-Login-Ajax-call"	: 	'true',
		 	 	                    "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
		 	 	            }
		 	    		 })
		 	    		 .then(function(response) {
			                 if (response.status == 200) {
			                	 deferred.resolve(response);
			 					 return deferred.promise;
			                 }
		 	    		 }).catch(function(response){
		 	    			 console.log('Unable to getEventDetails. Response :'+response.status);
		 	    			 deferred.reject(response);
		 					 return deferred.promise;
		 	    		});
		    		
			 		}).catch(function(tokenResponse){
			 			//If unable to get auth token, then redirect to login page
			 			console.log('Unable to gen token in AdminService.getEventDetails.Response :'+tokenResponse.status);
			 			
			 		});
		 		 };
		 		 
		 		 
		 		 service.getEventStats = function(userId,eventId){
		 			var deferred = $q.defer();
		    		var eventStatsURL = '/api/secured/users/organizers/admins/'+userId+'/events/'+eventId+'/statistics';
		    		//Get auth token to pass in request
		    		return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			
		    			return $http({
		 	 				method:'GET',
		 	 				url: eventStatsURL,
		 	 	            headers: {
		 	 	                    "Content-Type"		: 	"application/json",
		 	 						"accept"			:	"application/json",
		 	 	                    "X-Login-Ajax-call"	: 	'true',
		 	 	                    "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
		 	 	            }
		 	    		 })
		 	    		 .then(function(eventStatsResponse) {
			                 if (eventStatsResponse.status == 200) {
			                	 deferred.resolve(eventStatsResponse);
			 					 return deferred.promise;
			                 }
		 	    		 }).catch(function(eventStatsResponse){
		 	    			 console.log('Unable to get event stats . Response :'+eventStatsResponse.status);
		 	    			 deferred.reject(eventStatsResponse);
		 					 return deferred.promise;
		 	    		});
		    		}).catch(function(tokenResponse){
		    			//If unable to get auth token, then redirect to login page
		    			console.log('Inside EventService.getEventStats to gen token.Response :'+tokenResponse.status);
		    			
		    		});
		 		 };
	    	
		 		service.makeEventLive = function(eventId,userId){
		 			var deferred = $q.defer();
		 			var url =  '/api/secured/users/organizers/admins/'+userId+'/events/'+eventId+'/live';
		 			
		 			//Get auth token to pass in request
		    		return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			return $http({
			 				method:'POST',
			 				url: url,
			 	            data: {},
			 	            headers: {
			 	                    "Content-Type"		: 	"application/json",
			 						"accept"			:	"application/json",
			 	                    "X-Login-Ajax-call"	: 	"true",
			 	                   "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
			 	            }
			    		 }).then(function(response) {
			                 if (response.status == 200) {
			                	
			                 	deferred.resolve(response);
			 					return deferred.promise;
			                 }
			                 console.log('Unable to make event live . Response :'+response.status);
			                 deferred.reject(response);
		 					 return deferred.promise;
			    		 }).catch(function(response){
		 	    			 console.log('Unable to make event live . Response :'+response.status);
		 	    			 deferred.reject(response);
		 					 return deferred.promise;
		 	    		});
		    			
		    		}).catch(function(tokenResponse){
		    			//If unable to get auth token, then redirect to login page
		    			console.log('Inside EventService.makeEventLive to gen token.Response :'+tokenResponse.status);
		    		});
		 		};
		 		
		 		service.cancelEvent = function(eventId,userId){
		 			var deferred = $q.defer();
		 			var url =  '/api/secured/users/organizers/admins/'+userId+'/events/'+eventId+'/cancel';
		 			
		 			//Get auth token to pass in request
		    		return AuthenticationService.getAuthToken()
		    		.then(function(tokenResponse){
		    			//Extract epoch time and token from response
		    			var epoch = tokenResponse.epoch;
		    			var token = tokenResponse.token;
		    			return $http({
			 				method:'POST',
			 				url: url,
			 	            data: {},
			 	            headers: {
			 	                    "Content-Type"		: 	"application/json",
			 						"accept"			:	"application/json",
			 	                    "X-Login-Ajax-call"	: 	"true",
			 	                   "Authorization"		:	token , 
			 	                    "X-Auth-Date" 		: 	epoch
			 	            }
			    		 }).then(function(response) {
			                 if (response.status == 200) {
			                	
			                 	deferred.resolve(response);
			 					return deferred.promise;
			                 }
			                 console.log('Unable to cancel event . Response :'+response.status);
			                 deferred.reject(response);
		 					 return deferred.promise;
			    		 }).catch(function(response){
		 	    			 console.log('Unable to cancel event . Response :'+response.status);
		 	    			 deferred.reject(response);
		 					 return deferred.promise;
		 	    		});
		    			
		    		}).catch(function(tokenResponse){
		    			//If unable to get auth token, then redirect to login page
		    			console.log('Inside EventService.cancelEvent to gen token.Response :'+tokenResponse.status);
		    		});
		 		};
		 		 
	    	return service;
	    }
	    ]);
	    	