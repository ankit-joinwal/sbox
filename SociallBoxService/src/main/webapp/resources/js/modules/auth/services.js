'use strict';

var app = angular.module('Authentication')

.factory('AuthenticationService',
    [ 'Base64','$http', '$cookieStore', '$rootScope','$q','MD5',
    function (Base64,$http, $cookieStore, $rootScope, $q,MD5) {
    	 var service = {};
    	
    	 service.clearProfile = function(){
    		$rootScope.userProfile = {};
  			$cookieStore.remove('userProfile');
  		};
    	 
    	 //Service Function to Register User
    	 service.register = function(name,emailId,password){
    		 var deferred = $q.defer();
    		 var userData = '{ "name"	 : "'+		name		+'" , 	'+
							 ' "emailId" : "'+		emailId		+'" , 	'+
							 ' "password": "'+		password	+'" 	'+
							'}';
    		 return $http({
	 				method:'POST',
	 				url: '/api/public/users/organizers/admins/signup',
	 	            data: userData,
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true'
	 	            }
	    		 }).then(function(response) {
	                 if (response.status == 201) {
	                	//Store User Profile in cookies and return
	                	var encPassword = MD5.genMD5(password);
	                 	service.setUserProfile(response.data.data.id,response.data.data.name,response.data.data.email_id,
	                 							response.data.data.profile_id,response.data.data.profile_pic,response.data.data.status,encPassword,null,response.data.data.email_verified)
	                 	.then(function(userProfileResponse){
							
						});
	                 	deferred.resolve(response);
	 					return deferred.promise;
	                 }else{
	                	 //Clear Profile from cookies
	                	 service.clearProfile();
	 					 deferred.reject(response);
	 					 return deferred.promise;
	                 }
	             })
	             .catch(function(response){
	            	 
	            	 service.clearProfile();
 					 deferred.reject(response);
 					 return deferred.promise;
	             });
    	 };
    	 
    	 service.updatePass = function(token,password){
    		 var deferred = $q.defer();
    		 var userData = '{ "token"	 : "'+		token		+'" , 	'+
							 ' "password": "'+		password	+'" 	'+
							'}';
    		 return $http({
	 				method:'PUT',
	 				url: '/api/public/users/organizers/admins/password',
	 	            data: userData,
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true'
	 	            }
	    		 }).then(function(response) {
	                 if (response.status == 200) {
	                	
	                 	deferred.resolve(response);
	 					return deferred.promise;
	                 }else{
	                	 //Clear Profile from cookies
	 					 deferred.reject(response);
	 					 return deferred.promise;
	                 }
	             })
	             .catch(function(response){
	            	 
 					 deferred.reject(response);
 					 return deferred.promise;
	             });
    	 };
    	 
    	 service.resendVerifyEmail = function(userId){
    		 var deferred = $q.defer();
    		 return service.getAuthToken()
     		.then(function(tokenResponse){
     			//Extract epoch time and token from response
     			var epoch = tokenResponse.epoch;
     			var token = tokenResponse.token;
     			return $http({
	 				method:'POST',
	 				url: '/api/secured/users/organizers/admins/'+userId+'/resendVerifyEmail',
	 	            data: {},
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true',
	 	                    "Authorization"		:	token , 
	 	                    "X-Auth-Date" 		: 	epoch
	 	            }
	    		 }).then(function(response) {
	                 if (response.status == 200) {
	                 	deferred.resolve(response);
	 					return deferred.promise;
	                 }else{
	                	 //Clear Profile from cookies
	 					 deferred.reject(response);
	 					 return deferred.promise;
	                 }
	             })
	             .catch(function(response){
	            	 
	            	 service.clearProfile();
 					 deferred.reject(response);
 					 return deferred.promise;
	             });
     		}).catch(function(response){
    			deferred.reject(response);
				return deferred.promise;
    		});
    	 };
    	 
    	 service.resendCompanyVerifyEmail = function(orgId){
    		 var deferred = $q.defer();
    		 return service.getAuthToken()
     		.then(function(tokenResponse){
     			//Extract epoch time and token from response
     			var epoch = tokenResponse.epoch;
     			var token = tokenResponse.token;
     			return $http({
	 				method:'POST',
	 				url: '/api/secured/users/organizers/admins/'+orgId+'/resendCompanyVerifyEmail',
	 	            data: {},
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true',
	 	                    "Authorization"		:	token , 
	 	                    "X-Auth-Date" 		: 	epoch
	 	            }
	    		 }).then(function(response) {
	                 if (response.status == 200) {
	                 	deferred.resolve(response);
	 					return deferred.promise;
	                 }else{
	                	 //Clear Profile from cookies
	 					 deferred.reject(response);
	 					 return deferred.promise;
	                 }
	             })
	             .catch(function(response){
	            	 
	            	 service.clearProfile();
 					 deferred.reject(response);
 					 return deferred.promise;
	             });
     		}).catch(function(response){
    			deferred.reject(response);
				return deferred.promise;
    		});
    	 };
    	 
		 service.sendResetPass = function(emailId){
    		 var deferred = $q.defer();
    		 	return $http({
	 				method:'POST',
	 				url: '/api/public/users/organizers/admins/password',
	 	            data: {"email":emailId},
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true'
	 	            }
	    		 }).then(function(response) {
	                 if (response.status == 200) {
	                 	deferred.resolve(response);
	 					return deferred.promise;
	                 }else{
	                	 //Clear Profile from cookies
	 					 deferred.reject(response);
	 					 return deferred.promise;
	                 }
	             })
	             .catch(function(response){
	            	 deferred.reject(response);
 					 return deferred.promise;
	             });
     		
    	 };
		 
    	 service.encryptPass = function(password){
    		 var deferred = $q.defer();
    		 var  encPassword = MD5.genMD5(password);
    		 deferred.resolve(encPassword);
			 return deferred.promise;
    	 };
    	 
    	 //Service Function to Signin User
    	 service.signin = function(emailId,password,isPassEncrypted){
    		 var deferred = $q.defer();
    		 var encPassword ;
    		 if(isPassEncrypted){
    			 encPassword = password;
    		 }else{
    			 encPassword = MD5.genMD5(password);
    		 }
    		 var date = new Date();
    		 var epoch = date.getTime();
    		 
    		 var passAndTime = encPassword + '~' + epoch;
    		 var signature = Base64.encode(passAndTime);
    		 //Format is 'W~emailId'
    		 var username = 'W~'+ emailId;
    		 var token = 'Basic '+ Base64.encode(username + ":" + signature);
    		 
    		 return $http({
	 				method:'POST',
	 				url: '/api/secured/users/organizers/admins/signin',
	 	            data: {},
	 	            headers: {
	 	                    "Content-Type"		: 	"application/json",
	 						"accept"			:	"application/json",
	 	                    "X-Login-Ajax-call"	: 	'true' ,
	 	                    "Authorization"		:	token , 
	 	                    "X-Auth-Date" 		: 	epoch
	 	            		}
	    		 	}).then(function(response) {
		                 if (response.status == 200) {
		                	//Store profile in cookies and return
		                	 service.setUserProfile(response.data.data.id,response.data.data.name,response.data.data.email_id,
          							response.data.data.profile_id,response.data.data.profile_pic,response.data.data.status,encPassword,response.data.data.company_profile,response.data.data.email_verified)
				          	 .then(function(userProfileResponse){
							});
		                 	deferred.resolve(response);
		 					return deferred.promise;
		                 }else{
		                	 //Clear profile from cookies
		                	 service.clearProfile();
		 					 deferred.reject(response);
		 					 return deferred.promise;
		                 }
	             })
	             .catch(function(response){
	            	 
	            	 service.clearProfile();
 					 deferred.reject(response);
 					 return deferred.promise;
	             });
    	 };
    	 
    	 //Service Function to check if user is logged in or not
    	 service.isUserLoggedIn = function(){
    		 var deferred = $q.defer();
    		 var response = {};
 			
 			return service.getUserProfile()
		 			.then(function(userProfileResponse){
		 				if(userProfileResponse.status == 200 && (typeof userProfileResponse.data !== 'undefined')){
		 					var profile = userProfileResponse.data;
		 					
		 					var email = profile.emailId;
		 					var encPassword = profile.password;
		 					
		 					return service.signin(email,encPassword,true)
		 							.then(function(signinResponse){
		 								if(signinResponse.status == 200 ){
		 									response.status = 200;
		 				 					deferred.resolve(response);
		 				 					return deferred.promise;
		 								}else{
		 									response.status = 401;
		 				 					 deferred.reject(response);
		 				 					 return deferred.promise;
		 								}
		 							});
		 				}else{
		 					response.status = 401;
		 					 deferred.reject(response);
		 					 return deferred.promise;
		 				}
		 			});
 			
 		 };
    	 
 		 service.getAuthToken = function(){
 			 var deferred = $q.defer();
 			 var response = {};
 			return service.getUserProfile()
		 			.then(function(userProfileResponse){
		 				if(userProfileResponse.status == 200 && (typeof userProfileResponse.data !== 'undefined')){
		 					var profile = userProfileResponse.data;
		 					
		 					var email = profile.emailId;
		 					var encPassword = profile.password;
		 					
		 		    		
		 		    		 var date = new Date();
		 		    		 var epoch = date.getTime();
		 		    		 
		 		    		 var passAndTime = encPassword + '~' + epoch;
		 		    		 var signature = Base64.encode(passAndTime);
		 		    		 //Format is 'W~emailId'
		 		    		 var username = 'W~'+ email;
		 		    		 var token = 'Basic '+ Base64.encode(username + ":" + signature);
		 		    		 
		 		    		 response.status = 200;
		 		    		 response.epoch = epoch;
		 		    		 response.token = token;
		 		    		 deferred.resolve(response);
		 					 return deferred.promise;
		 				}else{
		 					 response.status = 401;
		 					 deferred.reject(response);
		 					 return deferred.promise;
		 				}
		 			});
 		 };
 		 
    	 //Service Function to Set User Profile in cookies
    	 service.setUserProfile = function(userId,name,emailId,profileId,profilePic,status,encPassword,companyProfile,email_verified){
    		 var deferred = $q.defer();
    		 //Clear current profile from cookies
    		 $rootScope.userProfile = {};
 			 $cookieStore.remove('userProfile');
 			 
 			 if(companyProfile ==null){
	 			 //Create profile
	 			$rootScope.userProfile = {
	 					userId: userId,
						name: name,
						emailId: emailId,
						profileId: profileId,
						profilePic : profilePic,
						status : status,
						password : encPassword,
						email_verified : email_verified
						
				};
 			 }else{
 				 //Create profile
 	 			$rootScope.userProfile = {
 	 					userId: userId,
 						name: name,
 						emailId: emailId,
 						profileId: profileId,
 						profilePic : profilePic,
 						status : status,
 						password : encPassword,
 						email_verified : email_verified,
 						companyProfile : companyProfile
 						
 				};
 			 }
 			
 			//Store in cookies
 			$cookieStore.put('userProfile', $rootScope.userProfile);
			var response = {"status": 200};
			
			deferred.resolve(response);
			return deferred.promise;
    	 };
    	 
    	//Service Function to get user profile from cookies
    	service.getUserProfile = function(){
    		var deferred = $q.defer();
 			var response = {};
 			var userProfile = $cookieStore.get('userProfile') ;
 			response.status = 200;
 			response.data = userProfile;
 			deferred.resolve(response);
			return deferred.promise;
 		};
    	 
 		//Service Function to Clear Previously saved profile from cookies
    	service.clearProfile = function(){
 			$rootScope.userProfile = {};
 			$cookieStore.remove('userProfile');
 		};
 		
 		service.editUserProfile = function(userId,userName,newPassword,profilePic){
 			var deferred = $q.defer();
 			var editProfileUrl = "/api/secured/users/organizers/admins/"+userId+"/profile";
 			return service.getAuthToken()
    		.then(function(tokenResponse){
    			//Extract epoch time and token from response
    			var epoch = tokenResponse.epoch;
    			var token = tokenResponse.token;
    			if(newPassword == null){
    				newPassword = null;
    			}
    			if(userName==null){
    				userName  = null;
    			}
    			var postData = '{ 	"name" : "' +userName+ '",'+
									'"new_password" : "' + newPassword+'" '+
								'}';
    			//Make API call to edit profile
    			return $http({
 	 				method:'POST',
 	 				url: editProfileUrl,
 	 	            data: postData,
 	 	            headers: {
 	 	                    "Content-Type"		: 	"application/json",
 	 						"accept"			:	"application/json",
 	 	                    "X-Login-Ajax-call"	: 	'true',
 	 	                    "Authorization"		:	token , 
	 	                    "X-Auth-Date" 		: 	epoch
 	 	            }
 	    		 }).then(function(response) {
	 	                 if (response.status == 200) {
	 	                	 if(profilePic!=null){
	 	                	 	var uploadUrl = "/api/secured/users/organizers/admins/"+userId+"/profile/picture";
	 	                	 	 var fd = new FormData();
				    		        fd.append('files', profilePic);
				    		        return $http.post(uploadUrl, fd, {
				    		            transformRequest: angular.identity,
				    		            headers: {'Content-Type': undefined, "X-Login-Ajax-call"	: 	'true',"accept"			:	"application/json",
				 	 	                    "Authorization"		:	token , 
					 	                    "X-Auth-Date" 		: 	epoch}
				    		        })
				    		        .then(function(uploadResponse) {
				    		        	if (uploadResponse.status == 201) {
					 	                	response.data.data.profile_pic = uploadResponse.data.data;
					 	                 	deferred.resolve(response);
					 	 					return deferred.promise;
				    		        	}else{
					 	                	 
					 	 					 deferred.reject(response);
					 	 					 return deferred.promise;
				    		        	}
				    		        });
	 	                	 }
	 	                 	deferred.resolve(response);
	 	 					return deferred.promise;
	 	                 }else{
	 	                	 
	 	 					 deferred.reject(response);
	 	 					 return deferred.promise;
	 	                 }
	 	             });
    		}).catch(function(response){
    			deferred.reject(response);
				return deferred.promise;
    		});
 		};
 		
 		//Return Service Object
    	return service;
    }
])

/*
 *	MD5 Service : To encrypt password 
 */
.factory('MD5',function(){

	var service = {};
	
	service.genMD5 = function(s){
		function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase();
	};
	
	return service;
})

/*
 * Base64 Service to convert any string to Base64
 */
.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});