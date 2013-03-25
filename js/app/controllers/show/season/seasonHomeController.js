(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('show.season.home', {
				url: '/',
				templateUrl: 'views/season-home.html',
				controller: 'seasonHomeController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('seasonHomeController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Event listeners

			// Private properties

			// Private functions

			// Scope properties

			// Scope functions

			// Initialization			
		});

}());