(function () {
	'use strict';

	angular
		.module('app')
		.controller('GreenhatController', GreenhatController)
		;

	
	function GreenhatController(
		GreenhatService,
		$scope,
		$stateParams,
		$state,
		$localStorage,
		$window,
		baseUrl
	) {
		var greenhat = this;

		greenhat.submitFeedback = submitFeedback;
		greenhat.feedback = {};
		
		init();

		function init() {
			/*console.log($localStorage);
			console.log($stateParams);
			console.log(baseUrl);
			*/
			//console.log('client gh init');

			var formData = new FormData();
			//greenhat.feedback.result = false;
			
			formData.append('greenhat_program_id', $stateParams.hashId);
			formData.append('user_id', $localStorage.currentUser.user.user_id);

			GreenhatService.checkFeedback(formData).then(function(res){
				
				if( res.data.result ){
					greenhat.feedback.result = true;
				}else{
					greenhat.feedback.result = false;
				}
				

			}).catch(function(res){
				//console.log('catch');	
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}

		function submitFeedback() {
			
			//console.log(greenhat.feedback);
			var formData = new FormData();
			formData.append('user_id', $localStorage.currentUser.user.user_id);
			formData.append('greenhat_program_id', $stateParams.hashId);
			formData.append('feedback', JSON.stringify(greenhat.feedback));
			

			GreenhatService.submitFeedback(formData).then(function(res) {
				//console.log(res);	
				if(res.data.result){
					toastr['success']('Successfully added feedback.');

					$window.location.href = App.url;
				}else{
					toastr['error']('Something went wrong. Please contact system administrator.');
				}
				
				

			}).catch(function(res){
				toastr['error']('Something went wrong. Please contact system administrator.');
			})
		}


		$scope.$watch('greenhat.feedback.result', function(newVal) {
	        //console.log(newVal);
	        //console.log(newVal.result);
	        if( !newVal ){
	        	//console.log('if');
	        	greenhat.feedback.exist = false;
	        }else{
	        	//console.log('else');
	        	greenhat.feedback.exist  = true;
	        }
	        
	    });
	}
	

})();
