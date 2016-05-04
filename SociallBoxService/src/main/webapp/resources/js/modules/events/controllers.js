'use strict';

var app = angular.module('Events',['textAngular']);

app.controller('EventsController',
		['$window','$scope', '$rootScope', '$routeParams','$location','AuthenticationService','EventService',
        function ($window,$scope, $rootScope, $routeParams,$location,AuthenticationService,EventService) {
		
		   $scope.eventDetails = '';
			
			$scope.initNewEvent = function(){
				$window.location.href = "/SociallBox/eo/home#/events/new";
			};
			
			$scope.toggleTag = function(event) {
				  //reference to the button that triggered the function:
				  var id = $(event.target).attr('id');
				  if($('#'+id).hasClass("btninactive")){
					   $('#'+id).removeClass("btninactive").addClass("btnactive");
					}else if($('#'+id).hasClass("btnactive")) {
						$('#'+id).removeClass("btnactive").addClass("btninactive");
					}
				
			};
				
			$scope.myevents_upcoming = function (tableState){
				$scope.isUpEventsLoading = true;
				var pagination = tableState.pagination;

			    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
			    var number = pagination.number || 10;  // Number of entries showed per page.
			    var pageNum ;
			    
			    pageNum = Math.floor(start/number) +1;
			    
				AuthenticationService.isUserLoggedIn()
				.then(function(response){
					AuthenticationService.getUserProfile()
					.then(function(profileResponse){
						
					    
						var profile = profileResponse.data;
						
						var userId = profile.userId;
						
						EventService.myevents_upcoming(userId,pageNum)
						.then(function(eventResponse){
							$scope.myEventsData_upcoming =eventResponse.data.data;
							var totalPages ;
							 if(eventResponse.data.total_records%number ==0){
						    	  totalPages = eventResponse.data.total_records/number ;
						      }else{
						    	  totalPages = Math.floor(eventResponse.data.total_records/number) +1 ;
						      }
						      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
						      $scope.isUpEventsLoading = false;
							});
					
					}).catch(function(response){
						 $scope.isUpEventsLoading = false;
						console.log("Inside event service controller Response :"+response.status);
						$window.location.href = "/SociallBox/eo/login";
			
					});
					
				}).catch(function(response){
					 $scope.isUpEventsLoading = false;
					console.log("Inside event service controller Response :"+response.status);
					$window.location.href = "/SociallBox/eo/login";
		
				});
			};
			
			$scope.myevents_past = function (tableState){
				$scope.isPastEventsLoading = true;
				var pagination = tableState.pagination;

			    var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
			    var number = pagination.number || 10;  // Number of entries showed per page.
			    var pageNum ;
			    pageNum = Math.floor(start/number) +1;
			    
				AuthenticationService.isUserLoggedIn()
				.then(function(response){
					AuthenticationService.getUserProfile()
					.then(function(profileResponse){
						var profile = profileResponse.data;
						
						var userId = profile.userId;
						
						EventService.myevents_past(userId,pageNum)
						.then(function(eventResponse){
							$scope.myEventsData_past =eventResponse.data.data;
							
							var totalPages ;
							 if(eventResponse.data.total_records%number ==0){
						    	  totalPages = eventResponse.data.total_records/number ;
						      }else{
						    	  totalPages = Math.floor(eventResponse.data.total_records/number) +1 ;
						      }
						      tableState.pagination.numberOfPages = totalPages;//set the number of pages so the pagination can update
						      $scope.isPastEventsLoading = false;
							});
						
					
					}).catch(function(response){
						 $scope.isPastEventsLoading = false;
						console.log("Inside event service controller Response :"+response.status);
						$window.location.href = "/SociallBox/eo/login";
			
					});
					
				}).catch(function(response){
					 $scope.isPastEventsLoading = false;
					console.log("Inside event service controller Response :"+response.status);
					$window.location.href = "/SociallBox/eo/login";
		
				});
			};
			
			$scope.goToEventDetails = function(eventId){
				$window.location.href = "/SociallBox/eo/home#/events/"+eventId;
			};
			
			$scope.getEventDetails = function(){
				var eventId = $routeParams.eventId;
				
				AuthenticationService.getUserProfile()
				.then(function(profileResponse){
					var userId = profileResponse.data.userId;
					EventService.getEventDetails(userId,eventId)
					.then(function(eventResponse){
						
						$scope.eventDetails = eventResponse.data.data.event;
						$scope.eventId = $scope.eventDetails.id;
						var  htmlString = $.parseHTML($scope.eventDetails.description );
						$( '#details').html( htmlString );
						
					})
					.catch(function(response){
						console.log('Inside EventsController.getEventDetails Response :'+response.status);
						$window.location.href = "/SociallBox/eo/home";
					});
				})
				.catch(function(profileResponse){
					console.log('Inside EventsController.getEventDetails Response :'+profileResponse.status);
					$window.location.href = "/SociallBox/eo/home";
				});
			};
			
			$scope.eventStats =function(){
				
				var eventId = $routeParams.eventId;
				
				AuthenticationService.getUserProfile()
				.then(function(profileResponse){
					var userId = profileResponse.data.userId;
					EventService.getEventStats(userId,eventId)
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
					   	
					   	
					   
					   	/*Users chart end*/
					})
					.catch(function(response){
						console.log('Inside EventsController.getEventStats Response :'+response.status);
						$window.location.href = "/SociallBox/eo/home";
					});
				})
				.catch(function(profileResponse){
					console.log('Inside EventsController.getEventStats.getUserProfile Response :'+profileResponse.status);
					$window.location.href = "/SociallBox/eo/home";
				});
			};
			
			$scope.getAllTags = function(){
				EventService.getAllTags()
				.then(function(response){
					$scope.allTags = response.data.data;
				})
				.catch(function(response){
					console.log("Inside event service controller to get all tags Response :"+response.status);
					alert('Unable to get tags for event');
		
				});
			}
			
			
			
			$scope.validateForm =function(){
				
				//$scope.tagNames = [];
				var tags = [],isFree,startDate,endDate;
				
				var eventDescription = $('#event-details').html();
				 $scope.eventDetails = eventDescription;
					var  htmlString = $.parseHTML($scope.eventDetails);
					$( '#reviewEventDescription').html( htmlString );
				
				if($('#IsFreeButton button.active').text()=="YES"){
						isFree ="true";
						$scope.isFree = true;
				}else{
						$scope.isFree = false;
						isFree="false";
				}
				
				
				$(".tags button").each(function(){
					
					var buttonClass =$(this).attr("class");
					
					if (buttonClass.indexOf( "btnactive") > -1){
						
						var tagName = $(this).attr('id');
						
						tags.push('"'+tagName+'"');
					};
				});
				
					$scope.tags = tags;
				
					 startDate =$("#startDate").val();
					 endDate = $("#endDate").val();
					 $scope.startDate = startDate;
					 $scope.endDate = endDate;
					
				   $("#reviewEventStartDate").text(startDate);
				   $("#reviewEventEndDate").text(endDate);
				   
				   for(var i =0;i<tags.length;i++){
						$(".reviewTagNames").append('<button type="button" class="btn btnactive">'+tags[i]+'</button>');
					};
					
					if (isFree == "true")
					$(".reviewFreeButton").append('<button type="button" class="btn btnactive">Yes</button>');
					else
					$(".reviewFreeButton").append('<button type="button" class="btn btnactive">NO</button>');
					
			}; 
			
			$scope.createEvent = function(){
				AuthenticationService.isUserLoggedIn()
				.then(function(response){
					
					AuthenticationService.getUserProfile()
						.then(function(profileResponse){
						
						var profile = profileResponse.data;
						
						var profileId = profile.profileId;
						
						var eventDetails = $scope.eventDetails;
						var eventTitle =$scope.eventTitle;
						var startDate =$scope.startDate;
						var endDate = $scope.endDate;
						var tags = $scope.tags;
						var isFree = $scope.isFree;
						var locationName = $scope.eventLocation;
						var locLat = $scope.event_place_lat;
						var locLng = $scope.event_place_lng;
						var locality = $scope.event_address_components[1].short_name;
						console.log('Name :'+locationName);
						console.log('Lat :'+locLat);
						console.log('Long :'+locLng);
						console.log('shortName' + locality);
					
						
						var createEventRequest = ' { '+
												 ' 	"title" 		 : "' +eventTitle+ 	'",'+
												 '	"description" 	 : "' + eventDetails+		'", '+
												 '	"event_details"  : {'+
																		' "location"		: {'+
																		'						"name" 	: "' +locationName+'" ,'+
																		'						"locality" 		: "' +locality+'" ,'+
																		'						"longitude" 	: "' +locLat+'" ,'+
																		'						"lattitude"	: "' +locLng+'" '+
																		'				 	  }'+
																		' },'+
												'	"tags" 		     : [' +tags + '],'+
												'	"startDate" 	 : "' +startDate + '", '+
												'	"endDate" 		 : "' +endDate + '" , '+
												'	"profile_id" 	 : "' +profileId + '" , '+
												'   "is_free"        : ' +isFree + '  '+
										'}';
						
						$("#event_process_div").addClass("loader");
						EventService.createEvent(createEventRequest)
						.then(function(eventResponse){
							var eventId = eventResponse.data.data.id;
							console.log('Event Id :'+eventId);
							var eventPic = $scope.eventPic;
					        console.log('event Pic :' );
					        console.dir(eventPic);
					        if(eventPic != null){
					        	EventService.uploadEventPhoto(eventId,eventPic)
						        .then(function(uploadResponse){
						        	if(uploadResponse.status == 201){
							        	console.log('Uploaded event Pic');
							        	$window.location.href = "/SociallBox/eo/home#/events";
						        	}
						         })
						        .catch(function(uploadResponse){
									console.log('Error in uploading event photo. Response :'+uploadResponse.status);
								});
					        }
					        
					        $window.location.href = "/SociallBox/eo/home#/events";
						})
						.catch(function(eventResponse){
							console.log('Error in creating company profile . Response :'+createResponse.status);
						});
						
					}).catch(function(profileResponse){
						console.log("Inside event service controller Response :"+profileResponse.status);
						$window.location.href = "/SociallBox/eo/login";
			
					});
				})
				.catch(function(response){
					console.log('Inside EventController.createEvent to create event. Response :'+response.status);
					console.log('Inside EventController.createEvent to create event. Response :'+response.status);
					$window.location.href = "/SociallBox/eo/login";
				});
			};
			
			$scope.makeLive = function(eventId){
				$('#pageContainer').addClass('loader');
				AuthenticationService.isUserLoggedIn()
				.then(function(response){
					AuthenticationService.getUserProfile()
					.then(function(profileResponse){
						var profile = profileResponse.data;
						var userId = profile.userId;
						
						EventService.makeEventLive(eventId,userId)
						.then(function(eventResponse){
							$('#makeLiveBtn').hide();
							$('#pageContainer').removeClass('loader');
							alert(eventResponse.data.data);
							
						})
						.catch(function(response){
							console.log('Inside EventsController.makeLive Response :'+response.status);
							$window.location.href = "/SociallBox/eo/home#/events";
						});
					}).catch(function(profileResponse){
						console.log("Inside event service controller Response :"+profileResponse.status);
						$window.location.href = "/SociallBox/eo/login";
			
					});
					
				}).catch(function(response){
					console.log("Inside event service controller Response :"+response.status);
					$window.location.href = "/SociallBox/eo/login";
		
				});
			};
			
			$scope.cancelEvent = function(eventId){
				var r = confirm("Are you sure you want to cancel event?");
				if (r == true) {
					$('#pageContainer').addClass('loader');
					AuthenticationService.isUserLoggedIn()
					.then(function(response){
						AuthenticationService.getUserProfile()
						.then(function(profileResponse){
							var profile = profileResponse.data;
							var userId = profile.userId;
							
							EventService.cancelEvent(eventId,userId)
							.then(function(eventResponse){
								$('#cancelEventBtn').hide();
								$('#pageContainer').removeClass('loader');
								alert(eventResponse.data.data);
							})
							.catch(function(response){
								console.log('Inside EventsController.cancelEvent Response :'+response.status);
								$window.location.href = "/SociallBox/eo/home#/events";
							});
						}).catch(function(profileResponse){
							console.log("Inside event service controller Response :"+profileResponse.status);
							$window.location.href = "/SociallBox/eo/login";
				
						});
						
					}).catch(function(response){
						console.log("Inside event service controller Response :"+response.status);
						$window.location.href = "/SociallBox/eo/login";
			
					});
				} 
			};
		}]);