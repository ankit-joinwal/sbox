'use strict';

angular.module('Authentication')


.controller('AuthController',['$window','$scope', '$compile','$rootScope', '$routeParams','$location','dialogs','AuthenticationService',
    function ($window,$scope,$compile, $rootScope, $routeParams,$location,dialogs,AuthenticationService) {
	 var dialogOpts = {windowClass:'dialog-custom'};
		$scope.isCookieEnabled = function(){
			$scope.cookiesEnabled = navigator.cookieEnabled;
		};
		
		$scope.register = function(){
    		$("#register-form").validate({
    			rules: {
    				username:{
    					required: true
    				},
	    			emailId: {
		    			required: true,
		    			email: true //email is required AND must be in the form of a valid email address
	    			},
	    			password: {
		    			required: true,
		    			minlength: 6 ,
		    			matchPasswords : true
	    			},
	    			confirmPassword:{
	    				required: true,
		    			minlength: 6 ,
		    			matchPasswords : true
	    			}
    			},
    			messages: {
    				username: {
    					required: "Name field cannot be blank!"
	    			},
    				emailId: {
    					required: "Email field cannot be blank!",
    					email: "Please enter a valid email address"
	    			},
	    			password: {
	    				required: "Password field cannot be blank!",
	    				minlength: "Your password must be at least 6 characters long"
	    			},
	    			confirmPassword: {
	    				required: "ConfirmPassword field cannot be blank!",
	    				minlength: "Your password must be at least 6 characters long"
	    			}
    			},
    			submitHandler: function(form){
    				
    				$('#login-div').addClass('loader');
    	    		var name = $scope.username;
    	    		var emailId = $scope.email;
    	    		var password = $scope.password;
    	    		
    	    		
    	    		
    	    		AuthenticationService.register(name,emailId,password)
    	    		.then(function(authResponse){
    					
    					$window.location.href = "/eo/home";
    				})
    				.catch(function(authResponse){
    					$('#login-div').removeClass('loader');
    					$('#register-form').after(
    					        '<div class="alert alert-danger alert-dismissable">'+
    				            '<button type="button" class="close" ' + 
    				                    'data-dismiss="alert" aria-hidden="true">' + 
    				                '&times;' + 
    				            '</button>' + 
    				            'Unable to register you. Please reach out to contact@sociallbox.com' + 
    				         '</div>');
    				});
    			}
   			 
			});
    		
    		
    	};
    	
    	$scope.login = function(){
    		$("#login-form").validate({
    			rules: {
	    			emailId: {
	    			required: true,
	    			email: true //email is required AND must be in the form of a valid email address
    			},
    			password: {
	    			required: true,
	    			minlength: 6
    			}
    			},
    			messages: {
    				emailId: {
	    			required: "Email field cannot be blank!",
	    			email: "Please enter a valid email address"
	    			},
    			password: {
    			required: "Password field cannot be blank!",
    			minlength: "Your password must be at least 6 characters long"
    			}
    			},
    			submitHandler: function(form){
    				$('#login-div').addClass('loader');
    	    		var emailId = $scope.loginEmail;
    	    		var password = $scope.loginPass;
    	    		if(emailId == null || password== null){
    	    			alert('Email Id and Password are mandatory');
    	    			$('#login-div').removeClass('loader');
    	    			return;
    	    		}
    	    		AuthenticationService.signin(emailId,password,false)
    	    		.then(function(authResponse){
    					$window.location.href = "/eo/home";
    				})
    				.catch(function(authResponse){
    					$('#login-div').removeClass('loader');
    					$('#register-form').after(
    					        '<div class="alert alert-danger alert-dismissable">'+
    				            '<button type="button" class="close" ' + 
    				                    'data-dismiss="alert" aria-hidden="true">' + 
    				                '&times;' + 
    				            '</button>' + 
    				            'Invalid Credentials!' + 
    				         '</div>');
    					
    				});
    	    		
    			}
    			 
    			});
    		
    	};
    	
    	/*$scope.verifyEoEmail = function(){
    		if ( $location.search().hasOwnProperty( 'token' ) ) {
    			$('#verifyContainer').addClass('loader');
    			 var token = $location.search()['token'];
    			 AuthenticationService.verifyEmail(token)
    			 .then(function(verifyResponse){
    				 $('#verifyContainer').removeClass('loader');
    				 var dlg = dialogs.notify('Success!','Email verified succesfully!',dialogOpts);
    				 dlg.result.then(function(btn){
 		        		$window.location.href = "/eo/login";
 		        	});
    			 })
    			 .catch(function(verifyResponse){
    				 $('#verifyContainer').removeClass('loader');
    				 var dlg = dialogs.error('Error',verifyResponse.data.exception.message,dialogOpts);
    		        	dlg.result.then(function(btn){
    		        		$window.location.href = "/eo/login";
    		        	});
    			 });
    		}else{
    			var dlg = dialogs.error('Error','Invalid request! Verification link is broken !',dialogOpts)
	        	dlg.result.then(function(btn){
	        		$window.location.href = "/eo/login";
	        	});
    		}
    	};*/
    	
    	$scope.logout = function(){
    		AuthenticationService.clearProfile();
    		$window.location.href = "/eo/login";
  		 };
    	
    	$scope.initUserProfilePage = function(){
    		AuthenticationService.getUserProfile()
			.then(function(profileResponse){
				var profile = profileResponse.data;
				$scope.userName = profile.name;
				
				$scope.emailId = profile.emailId;
				$scope.profilePic = profile.profilePic;
				$scope.userId = profile.userId;
				$scope.encPassword = profile.password;
				$scope.newPassword = null;
				$scope.newUserName = profile.name;
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
					$("#profile_form").before(element);
				};
			});
    	} ;
    	
    	$scope.resendVerifyEmail = function(){
    		$('#alert-box').hide();
    		AuthenticationService.getUserProfile()
    		.then(function(profileResponse){
    			var profile = profileResponse.data;
    			var userId = profile.userId;
    			
    			AuthenticationService.resendVerifyEmail(userId)
    			.then(function(response){
    				$('#profile_form').after(
    	    		        '<div id="alert-box" class="alert alert-info alert-dismissable">'+
    	    	            '<button type="button" class="close" ' + 
    	    	                    'data-dismiss="alert" aria-hidden="true">' + 
    	    	                '&times;' + 
    	    	            '</button>' + 
    	    	            'Email verification link sent successfully!' + 
    	    	         '</div>');
    			})
    			.catch(function(response){
    				$('#profile_form').after(
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
    	
    	$scope.editPtofile = function(){
    		$("#user-profile-container").addClass('loader');
    		var profilePic = $scope.newProfilePic;
    		var userId = $scope.userId;
    		var userName = $scope.newUserName;
    		var newPassword = $scope.newPassword;
    		AuthenticationService.editUserProfile(userId,userName,newPassword,profilePic)
			.then(function(editResponse){
				if (editResponse.status == 200) {
					
					if(newPassword != null){
						AuthenticationService.encryptPass(newPassword)
						.then(function(encryptedPass){
							AuthenticationService.setUserProfile(editResponse.data.data.id,editResponse.data.data.name,
									editResponse.data.data.email_id,editResponse.data.data.profile_id,
									editResponse.data.data.profile_pic,editResponse.data.data.status,
									encryptedPass,editResponse.data.data.company_profile)
				        	.then(function(){
				        		$window.location.reload();
				        	});
						});
					}else{
						
						var password = $scope.encPassword;
						AuthenticationService.setUserProfile(editResponse.data.data.id,editResponse.data.data.name,
								editResponse.data.data.email_id,editResponse.data.data.profile_id,
								editResponse.data.data.profile_pic,editResponse.data.data.status,
								password,editResponse.data.data.company_profile)
			        	.then(function(){
			        		//$window.location.href = "/eo/home#/profile";
			        		$window.location.reload();
			        	});
					}
					
				}
				
				
			})
			.catch(function(editResponse){
				if(editResponse.data.exception.message !=null){
					dialogs.error('Error',editResponse.data.exception.message,dialogOpts);
				}else{
					dialogs.error('Error','An unpexpected error has occured. Please reach out to contact@sociallbox.com',dialogOpts);
				}
			});
    		
    	}
    	
	}
]);