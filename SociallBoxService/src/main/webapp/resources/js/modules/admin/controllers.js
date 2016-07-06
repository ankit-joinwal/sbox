'use strict';

angular.module('Admin')
.controller('AdminController',['$window','$scope', '$rootScope', '$routeParams','$location','AdminService', 
      function ($window,$scope, $rootScope, $routeParams,$location,AdminService) {

	 var ctrl = this;

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}

	
	$scope.adminLogin = function(){
		$('#login-div').addClass('loader');
		var emailId = $scope.loginEmail;
		var password = $scope.loginPass;
		AdminService.signin(emailId,password,false)
		.then(function(authResponse){
			$window.location.href = "/nimda/home";
		})
		.catch(function(authResponse){
			$('#login-div').removeClass('loader');
			alert("Invalid Credentials !!!");
		});
	};
	
	$scope.logout = function(){
		AdminService.clearProfile();
		$window.location.href = "/nimda/login";
	};
	
	$scope.getProfileData = function(){
		AdminService.isUserLoggedIn()
		.then(function(response){
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
			$window.location.href = "/nimda/login";
		});
	};
  	
	
	
	
	
	$scope.goToCompanyDetails = function(profileId){
		$window.location.href = "/nimda/home#/organizers/"+profileId;
	};
	
	$scope.goToAdminHome = function(organizerId){
		$window.location.href = "/nimda/home#/organizers";
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
			$window.location.href = "/nimda/home";
		});
	};
	
	$scope.approveProfile = function(profileId){
		
		$scope.msg = null;
		var profileIds = [];
		profileIds.push(profileId);
		AdminService.approveCompanyProfile(profileIds)
		.then(function(approveResponse){
			AdminService.getPendingProfiles(1)
			.then(function(response){
				$scope.pending_profiles = response.data.data;
				alert('Profile approved succesfully');
				$window.location.href = "/nimda/home#/organizers";
				
			});
			
		})
		.catch(function(approveResponse){
			alert('Unable to approve profile.Error occured');
			$window.location.href = "/nimda/home#/organizers";
		});
	};
	
	$scope.getPaginatedProfiles = function(tableState){
		$scope.isProfilesLoading = true;

	    var pagination = tableState.pagination;

	    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
	    var number = pagination.number || 10;  // Number of entries showed per page.
	    var pageNum ;
	    
	    pageNum = Math.floor(start/number) +1;
	    if(pageNum==null){
	    	pageNum = 1;
	    }
	    
		AdminService.getEOProfiles(pageNum)
		.then(function(response){
			$scope.allProfiles = response.data.data;
			var totalPages ;
			 if(response.data.total_records%number ==0){
		    	  totalPages = response.data.total_records/number ;
		      }else{
		    	  totalPages = Math.floor(response.data.total_records/number) +1 ;
		      }
		      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
		      $scope.isProfilesLoading = false;
		});
	};
	
	$scope.getPaginatedPendingProfiles = function(tableState){
		$scope.isPendingProfilesLoading = true;

	    var pagination = tableState.pagination;

	    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
	    var number = pagination.number || 10;  // Number of entries showed per page.
	   
	    var pageNum ;
	    
	    pageNum = Math.floor(start/number) +1;
		AdminService.getPendingProfiles(pageNum)
		.then(function(response){
			$scope.pending_profiles = response.data.data;
			 var totalPages ;
			 if(response.data.total_records%number ==0){
		    	  totalPages = response.data.total_records/number ;
		      }else{
		    	  totalPages = Math.floor(response.data.total_records/number) +1 ;
		      }
		      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
		      $scope.isPendingProfilesLoading = false;
		});
	};
	
	 $scope.getPaginatedEvents = function(tableState) {

		 	$scope.isEventsLoading = true;

		    var pagination = tableState.pagination;

		    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
		    var number = pagination.number || 10;  // Number of entries showed per page.
		   
		    var pageNum ;
		    
		    pageNum = Math.floor(start/number) +1;
		    
		   
		    AdminService.getPendingEvents(pageNum)
		    .then(function (response) {
		      
		    $scope.pendingEvents = response.data.data;
		      var totalPages ;
		      
		      if(response.data.total_records%number ==0){
		    	  totalPages = response.data.total_records/number ;
		      }else{
		    	  totalPages = Math.floor(response.data.total_records/number) +1 ;
		      }
		     
		      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
		      $scope.isEventsLoading = false;
		    });
		  };
	
	$scope.goToEventDetails = function(eventId){
		$window.location.href = "/nimda/home#/events/"+eventId;
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
				$window.location.href = "/nimda/home";
			});
		})
		.catch(function(profileResponse){
			$window.location.href = "/nimda/home";
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
				var meetups = [];
				
				var monthlyUsers = response.data.data.daily_user_stats;
				$.each(monthlyUsers, function(idx, obj) {
					labelArr.push(obj.date);
					regUsers.push(obj.reg_users);
					intUsers.push(obj.int_users);
					
				});
				
				
				
				
				var meetupStats = response.data.data.daily_meetup_stats;
				$.each(meetupStats, function(idx, obj) {
					
					meetups.push(obj.meetup_count);
					
					
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
				   	   }, 
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
			   	  myBarChart = new Chart(ctx).Bar(data, option_bars);
			   	 $("#dailyUsers").removeClass('loader');
			   	
			   	/*Users chart end */
			   	
			})
			.catch(function(response){
				$window.location.href = "/nimda/home";
			});
		})
		.catch(function(profileResponse){
			$window.location.href = "/nimda/home";
		});
	};
	
	$scope.approveEvent = function(eventdId){
		$scope.msg = null;
		var eventIds = [];
		eventIds.push(eventdId);
		AdminService.approveEvents(eventIds)
		.then(function(approveResponse){
			
			AdminService.getPendingEvents(1)
			.then(function(response){
				$scope.pending_events = response.data.data;
				alert('Event approved succesfully')
				$window.location.href = "/nimda/home#/organizers";
			});
			
		})
		.catch(function(approveResponse){
			alert('Unable to approve events');
			$window.location.href = "/nimda/home#/organizers";
		});
	};
	
	$scope.rejectEvent = function(eventdId){
		$scope.msg = null;
		var eventIds = [];
		eventIds.push(eventdId);
		AdminService.rejectEvents(eventIds)
		.then(function(rejectResponse){
			
			AdminService.getPendingEvents()
			.then(function(response){
				$scope.pending_events = response.data.data;
				alert('Event rejected succesfully')
				$window.location.href = "/nimda/home#/organizers";
			});
			
		})
		.catch(function(approveResponse){
			alert('Unable to reject events');
			$window.location.href = "/nimda/home#/organizers";
		});
	};
	
  }
  ]);