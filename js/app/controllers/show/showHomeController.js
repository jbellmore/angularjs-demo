(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('show.home', {
				url: '/',
				templateUrl: 'views/show-home.html',
				controller: 'showHomeController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('showHomeController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Private properties
			

			// Private functions

			// Scope properties

			// Scope functions

			// Initialization

		});

}());