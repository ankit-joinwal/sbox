'use strict';

var app = angular.module('Company');

app.controller('CompanyController',
		['$window','$scope', '$compile','$rootScope', '$routeParams','$location','dialogs','AuthenticationService','CompanyService',
        function ($window,$scope, $compile,$rootScope, $routeParams,$location,dialogs,AuthenticationService,CompanyService) {
			 var dialogOpts = {windowClass:'dialog-custom'};
			$scope.initCompanyPage = function(){
				$('#company-profile-div').addClass('loader')
					AuthenticationService.getUserProfile()
					.then(function(profileResponse){
						var profile = profileResponse.data;
						
						if(profile.status == 'COMPANY_NOT_LINKED'){
							$window.location.href = "/eo/home#/company/new";
						}
						$('#company-profile-div').removeClass('loader')
					});
					
			};
			
			$scope.initCompanyProfile = function(){
				AuthenticationService.getUserProfile()
				.then(function(profileResponse){
					var profile = profileResponse.data;
					$scope.userName = profile.name;
					$scope.emailId = profile.emailId;
					$scope.profilePic = profile.profilePic;
					$scope.userId = profile.userId;
					$scope.companyProfile = profile.companyProfile;
					$("#company-profile-div").removeClass("loader");
					
					if(profile.companyProfile.email_verified == false){
						var message = 'Email verification is pending for '+profile.companyProfile.name+'. Email verification link has been sent to company registered email id. Click <a class="a-prevent-default" ng-click="resendCompanyVerifyEmail()" ><b>here</b></a> to send verification link again.';
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
						$("#companyNameDiv").before(element);
					}
				});
			};
			
			$scope.resendCompanyVerifyEmail = function(){
				$('#alert-box').hide();
				AuthenticationService.getUserProfile()
				.then(function(profileResponse){
					var profile = profileResponse.data;
					var orgId = profile.companyProfile.id;
					
					AuthenticationService.resendCompanyVerifyEmail(orgId)
					.then(function(response){
						$('#companyNameDiv').before(
						        '<div id="alert-box" class="alert alert-info alert-dismissable">'+
					            '<button type="button" class="close" ' + 
					                    'data-dismiss="alert" aria-hidden="true">' + 
					                '&times;' + 
					            '</button>' + 
					            'Email verification link sent successfully!' + 
					         '</div>');
					})
					.catch(function(response){
						$('#companyNameDiv').before(
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
			
			$scope.createCompany = function(){
				$("#company_process_div").addClass("loader");
				AuthenticationService.getUserProfile()
				.then(function(profileResponse){
					var profile = profileResponse.data;
					
					var userId = profile.userId;
					
					var companyName = $scope.companyName;
					var street = $scope.street;
					var city  = $scope.city;
					var state = $scope.state;
					var zipcode = $scope.zip;
					var country = $scope.country;
					var phone1 = $scope.phone1;
					var phone2 = $scope.phone2;
					var phone3 = $scope.phone3;
					var emailId = $scope.companyEmail;
					var website = $scope.website;
					if(phone2==null){
						phone2 = '';
					}
					if(phone3 == null){
						phone3 = '';
					}
					var createCompanyRequest = ' { '+
											'"event_organizer" : { 		"name" 			: "' +companyName+ 	'",'+
																	'	"email_id" 		: "' + emailId+		'", '+
																	'	"website" 		: "' + website+		'", '+
																	'	"address" 		: {'+
																	'						"street" 	: "' +street+'" ,'+
																	'						"city" 		: "' +city+'" ,'+
																	'						"state" 	: "' +state+'" ,'+
																	'						"zip_code"	: "' +zipcode+'" ,'+
																	'						"country" 	: "' +country+'" '+
																	'				 	  },'+
																	'	"phone1" 		: "' +phone1 + '",'+
																	'	"phone2" 		: "' +phone2 + '", '+
																	'	"phone3" 		: "' +phone3 + '"  '+
																	
																' },'+
											' "is_existing_company" : false ' +
									'}';
				
					
					CompanyService.createCompanyProfile(userId,createCompanyRequest)
					.then(function(createResponse){
						var companyId = createResponse.data.data.company_profile.id;
						
						var coverPic = $scope.coverPic;
				        var picType = 'coverPic';
				        if(coverPic != null){
					        CompanyService.uploadCompanyPhoto(userId,companyId,coverPic,picType)
					        .then(function(uploadResponse){
					        	
					        	AuthenticationService.setUserProfile(createResponse.data.data.id,createResponse.data.data.name,
			        					createResponse.data.data.email_id,createResponse.data.data.profile_id,
			        					createResponse.data.data.profile_pic,createResponse.data.data.status,
			        					profile.password,createResponse.data.data.company_profile)
					        	.then(function(){
					        		$window.location.href = "/eo/home#/company";
					        	});
					        	
					        });
				        }else{
				        	AuthenticationService.setUserProfile(createResponse.data.data.id,createResponse.data.data.name,
		        					createResponse.data.data.email_id,createResponse.data.data.profile_id,
		        					createResponse.data.data.profile_pic,createResponse.data.data.status,
		        					profile.password,createResponse.data.data.company_profile)
				        	.then(function(){
				        		$window.location.href = "/eo/home#/company";
				        		
				        	});
				        }
				        
				        
					})
					.catch(function(createResponse){
						if(createResponse.data.exception.message !=null){
							dialogs.error('Error',createResponse.data.exception.message,dialogOpts);
						}else{
							dialogs.error('Error','An unpexpected error has occured. Please reach out to contact@sociallbox.com',dialogOpts);
						}
						$("#company_process_div").removeClass("loader");
					});
				})
				.catch(function(response){
					$window.location.href = "/eo/login";
				});
			};
			
		}
		]);