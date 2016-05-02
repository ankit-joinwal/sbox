'use strict';

angular.module('Admin')
.controller('AdminController',['$window','$scope', '$rootScope', '$routeParams','$location','AdminService',
      function ($window,$scope, $rootScope, $routeParams,$location,AdminService) {

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}

	
	$scope.adminLogin = function(){
		$('#login-div').addClass('loader');
		var emailId = $scope.loginEmail;
		var password = $scope.loginPass;
		console.log('inside AdminAuthController for signin');
		AdminService.signin(emailId,password,false)
		.then(function(authResponse){
			console.log('Inside AdminAuthController.signin Response :'+authResponse.status);
			$window.location.href = "/SociallBox/nimda/home";
		})
		.catch(function(authResponse){
			console.log('Inside AdminAuthController.signin Response :'+authResponse.status);
			$('#login-div').removeClass('loader');
			alert("Invalid Credentials !!!");
		});
	};
	
	$scope.logout = function(){
		AdminService.clearProfile();
		$window.location.href = "/SociallBox/nimda/login";
	};
	
	$scope.getProfileData = function(){
		AdminService.isUserLoggedIn()
		.then(function(response){
			console.log('Inside AdminController.isUserLoggedIn Response :'+response.status);
			AdminService.getUserProfile()
			.then(function(profileResponse){
				var profile = profileResponse.data;
				$scope.userName = profile.name;
				$scope.emailId = profile.emailId;
				$scope.profilePic = profile.profilePic;
				$scope.userId = profile.userId;
			});
			
		})
		.catch(function(response){
			console.log('Inside AdminController.isUserLoggedIn Response :'+response.status);
			$window.location.href = "/SociallBox/nimda/login";
		});
	};
  	
	$scope.getAllEOProfiles = function(){
		AdminService.getEOProfiles()
		.then(function(response){
			$scope.profiles = response.data.data;
		});
	};
	
	$scope.getPendingProfiles = function(){
		AdminService.getPendingProfiles()
		.then(function(response){
			$scope.pending_profiles = response.data.data;
		});
	};
	
	$scope.goToCompanyDetails = function(profileId){
		$window.location.href = "/SociallBox/nimda/home#/organizers/"+profileId;
	};
	
	$scope.goToAdminHome = function(organizerId){
		$window.location.href = "/SociallBox/nimda/home#/organizers";
	};
	
	$scope.getCompanyDetails = function(){
		var profileId = $routeParams.profileId;
		
		AdminService.getCompanyDetails(profileId)
		.then(function(companyResponse){
			$scope.companyProfile = companyResponse.data.data.company_profile;
			$scope.eoAdminProfile = companyResponse.data.data;
			$('#company-profile-div').removeClass('loader');
		})
		.catch(function(response){
			console.log('Inside AdminController.getCompanyDetails Response :'+response.status);
			$window.location.href = "/SociallBox/nimda/home";
		});
	};
	
	$scope.approveProfile = function(profileId){
		$scope.msg = null;
		var profileIds = [];
		profileIds.push(profileId);
		AdminService.approveCompanyProfile(profileIds)
		.then(function(approveResponse){
			console.log(JSON.stringify(approveResponse.data));
			AdminService.getPendingProfiles()
			.then(function(response){
				$scope.pending_profiles = response.data.data;
				alert('Profile approved succesfully')
				$window.location.href = "/SociallBox/nimda/home#/organizers";
				
			});
			
		})
		.catch(function(approveResponse){
			console.log('Inside AdminController.approveProfile Response :'+approveResponse.status);
			alert('Unable to approve profile.Error occured');
			$window.location.href = "/SociallBox/nimda/home#/organizers";
		});
	};
	
	$scope.getPendingEvents = function(){
		AdminService.getPendingEvents()
		.then(function(response){
			$scope.pending_events = response.data.data;
		});
	};
	
	$scope.goToEventDetails = function(eventId){
		$window.location.href = "/SociallBox/nimda/home#/events/"+eventId;
	};
	
	$scope.getEventDetails = function(){
		var eventId = $routeParams.eventId;
		
		AdminService.getUserProfile()
		.then(function(profileResponse){
			var userId = profileResponse.data.userId;
			AdminService.getEventDetails(userId,eventId)
			.then(function(eventResponse){
				
				$scope.eventDetails = eventResponse.data.data.event;
				$scope.eventId = $scope.eventDetails.id;
				var  htmlString = $.parseHTML($scope.eventDetails.description );
				$( '#details').html( htmlString );
				
			})
			.catch(function(response){
				console.log('Inside AdminController.getEventDetails Response :'+response.status);
				$window.location.href = "/SociallBox/nimda/home";
			});
		})
		.catch(function(profileResponse){
			console.log('Inside AdminController.getEventDetails Response :'+profileResponse.status);
			$window.location.href = "/SociallBox/nimda/home";
		});
	};
	
	$scope.eventStats =function(){
		
		var eventId = $routeParams.eventId;
		
		AdminService.getUserProfile()
		.then(function(profileResponse){
			var userId = profileResponse.data.userId;
			AdminService.getEventStats(userId,eventId)
			.then(function(response){
				$scope.statsCards = response.data.data;
				
				/* Create DailyEventUsersChart */
				var labelArr = [];
				var regUsers = [];
				var intUsers = [];
				
				var monthlyUsers = response.data.data.daily_user_stats;
				$.each(monthlyUsers, function(idx, obj) {
					labelArr.push(obj.date);
					regUsers.push(obj.reg_users);
					intUsers.push(obj.int_users);
					
				});
				
				var ctx, data, myBarChart, option_bars;
			   	  Chart.defaults.global.responsive = true;
			   	 

			   	  ctx = $('#users-chart').get(0).getContext('2d');
			   	  
			   	  option_bars = {
			   	    scaleBeginAtZero: true,
			   	    scaleShowGridLines: true,
			   	    scaleGridLineColor: "rgba(0,0,0,.05)",
			   	    scaleGridLineWidth: 1,
			   	    scaleShowHorizontalLines: true,
			   	    scaleShowVerticalLines: false,
			   	    barShowStroke: true,
			   	    barStrokeWidth: 1,
			   	    barValueSpacing: 5,
			   	    barDatasetSpacing: 3
			   	   
			   	  };
			   	  data = {
			   	    labels: labelArr,
			   	    datasets: [
			   	      {
			   	        label: "Registered Users",
			   	        fillColor: "rgba(26, 188, 156,0.6)",
			   	        strokeColor: "#1ABC9C",
			   	        pointColor: "#1ABC9C",
			   	        pointStrokeColor: "#fff",
			   	        pointHighlightFill: "#fff",
			   	        pointHighlightStroke: "#1ABC9C",
			   	        data: regUsers
			   	      },
			   	      {
				   	     label: "Interested Users",
				   	     fillColor: "rgba(255, 192, 77,1)",
				         strokeColor: "#ffc04d",
				         pointColor: "#ffc04d",
				         pointStrokeColor: "#fff",
				         pointHighlightFill: "#fff",
				         pointHighlightStroke: "#22A7F0",
				   	     data: intUsers
				   	   }
			   	    ]
			   	  };
			   	  myBarChart = new Chart(ctx).Bar(data, option_bars);
			   	 $("#dailyUsers").removeClass('loader');
			   	
			   	/*Users chart end */
			   	
			   	/* Create DailyMeetupsChart */
				var meetuplabelArr = [];
				var meetups = [];
				
				
				var meetupStats = response.data.data.daily_meetup_stats;
				$.each(meetupStats, function(idx, obj) {
					meetuplabelArr.push(obj.date);
					meetups.push(obj.meetup_count);
					
					
				});
				
				var ctx_meetup_chrt, meetup_data, meetupsBarChart, option_meetup_bars;
			   	  Chart.defaults.global.responsive = true;
			   	  ctx_meetup_chrt = $('#meetups-chart').get(0).getContext('2d');
			   	
			   	  option_meetup_bars = {
			   	    scaleBeginAtZero: true,
			   	    scaleShowGridLines: true,
			   	    scaleGridLineColor: "rgba(0,0,0,.05)",
			   	    scaleGridLineWidth: 1,
			   	    scaleShowHorizontalLines: true,
			   	    scaleShowVerticalLines: false,
			   	    barShowStroke: true,
			   	    barStrokeWidth: 1,
			   	    barValueSpacing: 5,
			   	    barDatasetSpacing: 3
			   	  };
			   	  meetup_data = {
			   	    labels: meetuplabelArr,
			   	    datasets: [
			   	      {
			   	        label: "Meetups",
			   	        fillColor: "rgba(255, 231, 51,1)",
			   	        strokeColor: "#FFE733",
			   	        pointColor: "#FFE733",
			   	        pointStrokeColor: "#fff",
			   	        pointHighlightFill: "#fff",
			   	        pointHighlightStroke: "#1ABC9C",
			   	        data: meetups
			   	      }
			   	    ]
			   	  };
			   	meetupsBarChart = new Chart(ctx_meetup_chrt).Bar(meetup_data, option_meetup_bars);
			   	
			   	$("#meetupsChart").removeClass('loader');
			   
			   	/*Users chart end*/
			})
			.catch(function(response){
				console.log('Inside AdminController.getEventStats Response :'+response.status);
				$window.location.href = "/SociallBox/nimda/home";
			});
		})
		.catch(function(profileResponse){
			console.log('Inside AdminController.getEventStats.getUserProfile Response :'+profileResponse.status);
			$window.location.href = "/SociallBox/nimda/home";
		});
	};
	
	$scope.approveEvent = function(eventdId){
		$scope.msg = null;
		var eventIds = [];
		eventIds.push(eventdId);
		AdminService.approveEvents(eventIds)
		.then(function(approveResponse){
			console.log(JSON.stringify(approveResponse.data));
			
			AdminService.getPendingEvents()
			.then(function(response){
				$scope.pending_events = response.data.data;
				alert('Event approved succesfully')
				$window.location.href = "/SociallBox/nimda/home#/organizers";
			});
			
		})
		.catch(function(approveResponse){
			console.log('Inside AdminController.approveEvents Response :'+approveResponse.status);
			alert('Unable to approve events');
			$window.location.href = "/SociallBox/nimda/home#/organizers";
		});
	};
	
	$scope.rejectEvent = function(eventdId){
		$scope.msg = null;
		var eventIds = [];
		eventIds.push(eventdId);
		AdminService.rejectEvents(eventIds)
		.then(function(rejectResponse){
			console.log(JSON.stringify(rejectResponse.data));
			
			AdminService.getPendingEvents()
			.then(function(response){
				$scope.pending_events = response.data.data;
				alert('Event rejected succesfully')
				$window.location.href = "/SociallBox/nimda/home#/organizers";
			});
			
		})
		.catch(function(approveResponse){
			console.log('Inside AdminController.approveEvents Response :'+approveResponse.status);
			alert('Unable to reject events');
			$window.location.href = "/SociallBox/nimda/home#/organizers";
		});
	};
	
  }
  ]);