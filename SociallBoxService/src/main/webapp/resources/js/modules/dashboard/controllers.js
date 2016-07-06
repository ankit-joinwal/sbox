'use strict';

var app = angular.module('Dashboard');

app.controller('DashboardController',
				['$window','$scope','$compile', '$rootScope', '$routeParams','$location','dialogs','AuthenticationService','DashboardService',
                function ($window,$scope,$compile, $rootScope, $routeParams,$location,dialogs,AuthenticationService,DashboardService) {
	
	 var dialogOpts = {windowClass:'dialog-custom'};
	 
	$scope.editProfile = function(){
		$window.location.href = "/eo/home#/profile";
	};
	
	$scope.resendVerifyEmail = function(){
		$('#alert-box').hide();
		AuthenticationService.getUserProfile()
		.then(function(profileResponse){
			var profile = profileResponse.data;
			var userId = profile.userId;
			
			AuthenticationService.resendVerifyEmail(userId)
			.then(function(response){
				$('#loader-container').after(
				        '<div id="alert-box" class="alert alert-info alert-dismissable">'+
			            '<button type="button" class="close" ' + 
			                    'data-dismiss="alert" aria-hidden="true">' + 
			                '&times;' + 
			            '</button>' + 
			            'Email verification link sent successfully!' + 
			         '</div>');
			})
			.catch(function(response){
				$('#loader-container').after(
				        '<div id="alert-box" class="alert alert-danger alert-dismissable">'+
			            '<button type="button" class="close" ' + 
			                    'data-dismiss="alert" aria-hidden="true">' + 
			                '&times;' + 
			            '</button>' + 
			            'Unable to send verification mail. Please check your registered email id. Or try again after some time.' + 
			         '</div>');
			});
		});
		
	};
	
	$scope.initCompanyPage = function(){
		AuthenticationService.isUserLoggedIn()
		.then(function(response){
			AuthenticationService.getUserProfile()
			.then(function(profileResponse){
				var profile = profileResponse.data;
				$scope.userName = profile.name;
				$scope.emailId = profile.emailId;
				$scope.profilePic = profile.profilePic;
				$scope.userId = profile.userId;
				
				if(profile.status == 'COMPANY_NOT_LINKED'){
					$window.location.href = "/eo/home#/company/new";
				}else{
					$window.location.href = "/eo/home#/company";
				}
			});
			
		})
		.catch(function(response){
			$window.location.href = "/eo/login";
		});
	};
	
	$scope.getProfileData = function(){
		if(!navigator.cookieEnabled){
			AuthenticationService.clearProfile();
    		$window.location.href = "/eo/login";
		}
		
		AuthenticationService.isUserLoggedIn()
		.then(function(response){
			AuthenticationService.getUserProfile()
			.then(function(profileResponse){
				var profile = profileResponse.data;
				$scope.userName = profile.name;
				$scope.emailId = profile.emailId;
				$scope.profilePic = profile.profilePic;
				$scope.userId = profile.userId;
				$scope.email_verified = profile.email_verified;
				if(profile.email_verified == false){
					
					var message = 'Email verification is pending. Email verification link has been sent to your registered email id. Click <a class="a-prevent-default" ng-click="resendVerifyEmail()" ><b>here</b></a> to send verification link again.';
					var messageBox =  '<div id="alert-box" class="alert alert-info alert-dismissable">'+
									            '<button type="button" class="close" ' + 
							                    'data-dismiss="alert" aria-hidden="true">' + 
							                '&times;' + 
							            '</button>' + 
							            message + 
							         '</div>';
					var template = angular.element(messageBox);
					// Step 2: compile the template
					var linkFn = $compile(template);
					// Step 3: link the compiled template with the scope.
					var element = linkFn($scope);
					// Step 4: Append to DOM (optional)
					$("#loader-container").after(element);
				};
				
				if(profile.companyProfile != null){
					if(profile.companyProfile.email_verified == false){
						var message = 'Email verification is pending for '+profile.companyProfile.name+'. Email verification link has been sent to company registered email id. Click <a class="a-prevent-default" ng-click="resendCompanyVerifyEmail()" ><b>here</b></a> to send verification link again.';
						var messageBox =  '<div id="alert-box1" class="alert alert-info alert-dismissable">'+
										            '<button type="button" class="close" ' + 
								                    'data-dismiss="alert" aria-hidden="true">' + 
								                '&times;' + 
								            '</button>' + 
								            message + 
								         '</div>';
						var template = angular.element(messageBox);
						// Step 2: compile the template
						var linkFn = $compile(template);
						// Step 3: link the compiled template with the scope.
						var element = linkFn($scope);
						// Step 4: Append to DOM (optional)
						$("#loader-container").after(element);
					}
				}
			});
			
		})
		.catch(function(response){
			$window.location.href = "/eo/login";
		});
	};
	
	$scope.resendCompanyVerifyEmail = function(){
		$('#alert-box1').hide();
		AuthenticationService.getUserProfile()
		.then(function(profileResponse){
			var profile = profileResponse.data;
			var orgId = profile.companyProfile.id;
			
			AuthenticationService.resendCompanyVerifyEmail(orgId)
			.then(function(response){
				$('#loader-container').after(
				        '<div id="alert-box1" class="alert alert-info alert-dismissable">'+
			            '<button type="button" class="close" ' + 
			                    'data-dismiss="alert" aria-hidden="true">' + 
			                '&times;' + 
			            '</button>' + 
			            'Email verification link sent successfully!' + 
			         '</div>');
			})
			.catch(function(response){
				$('#loader-container').after(
				        '<div id="alert-box1" class="alert alert-danger alert-dismissable">'+
			            '<button type="button" class="close" ' + 
			                    'data-dismiss="alert" aria-hidden="true">' + 
			                '&times;' + 
			            '</button>' + 
			            'Unable to send verification mail. Please check your registered email id. Or try again after some time.' + 
			         '</div>');
			});
		});
		
	};
	
	$scope.initDashboardCards = function(){
		var userId ;
		AuthenticationService.getUserProfile()
		.then(function(profileResponse){
			var profile = profileResponse.data;
			userId = profile.userId;
			
			DashboardService.dashboardCards(userId)
			.then(function(dashboardResponse){
				$scope.dashboardCards = dashboardResponse.data.data;
				$('#dashboard').removeClass('loader');
			})
			.catch(function(dashboardResponse){
				$('#dashboard').removeClass('loader');
				dialogs.error('Error','An unpexpected error has occured. Please reach out to contact@sociallbox.com',dialogOpts);
			});
		});
		
	};
	
	$scope.initDashboardCharts = function(){
		
		var userId ;
		AuthenticationService.getUserProfile()
		.then(function(profileResponse){
			var profile = profileResponse.data;
			userId = profile.userId;
			
			DashboardService.getMonthlyUsers(userId)
			.then(function(dashboardResponse){
				var labelArr = [];
				var dataArr = [];
				
				var monthlyUsers = dashboardResponse.data.data.attendees_by_month;
				$.each(monthlyUsers, function(idx, obj) {
					labelArr.push(obj.month);
					dataArr.push(obj.attendees);
					
				});
				
				var ctx, data, myBarChart, option_bars;
			   	  Chart.defaults.global.responsive = true;
			   	  ctx = $('#bar-chart').get(0).getContext('2d');
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
			   	    barDatasetSpacing: 3,
			   	    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
			   	  };
			   	  data = {
			   	    labels: labelArr,
			   	    datasets: [
			   	      {
			   	        label: "My First dataset",
			   	        fillColor: "rgba(26, 188, 156,0.6)",
			   	        strokeColor: "#1ABC9C",
			   	        pointColor: "#1ABC9C",
			   	        pointStrokeColor: "#fff",
			   	        pointHighlightFill: "#fff",
			   	        pointHighlightStroke: "#1ABC9C",
			   	        data: dataArr
			   	      }
			   	    ]
			   	  };
			   	  myBarChart = new Chart(ctx).Bar(data, option_bars);
			   	$("#monthlyUsers").removeClass('loader');
			})
			.catch(function(dashboardResponse){
				dialogs.error('Error','An unpexpected error has occured. Please reach out to contact@sociallbox.com',dialogOpts);
			});
		});
	};
	
	$scope.getUserMessages = function(tableState){
		$scope.isUserMessagesLoading = true;
		var pagination = tableState.pagination;

	    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
	    var number = pagination.number || 10;  // Number of entries showed per page.
	   
	    var pageNum ;
	    
	    pageNum = Math.floor(start/number) +1;
	    
		var userId ;
		AuthenticationService.getUserProfile()
		.then(function(profileResponse){
			var profile = profileResponse.data;
			userId = profile.userId;
			
			DashboardService.getMessagesForUser(userId,pageNum)
			.then(function(messagesResponse){
				$scope.userMessages = messagesResponse.data.data;
				 var totalPages ;
				 if(messagesResponse.data.total_records%number ==0){
			    	  totalPages = messagesResponse.data.total_records/number ;
			      }else{
			    	  totalPages = Math.floor(messagesResponse.data.total_records/number) +1 ;
			      }
			      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
			      $scope.isUserMessagesLoading = false;
			})
			.catch(function(dashboardResponse){
				dialogs.error('Error','An unpexpected error has occured. Please reach out to contact@sociallbox.com',dialogOpts);
			});
		})
		.catch(function(dashboardResponse){
			alert('Unable to get details from server');
		});
		
	};
	
}
]);