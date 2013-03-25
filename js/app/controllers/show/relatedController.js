(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('show.related', {
				url: '/related',
				templateUrl: 'views/show-list.html',
				controller: 'relatedController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('relatedController', function ($scope, $http, $stateParams) {
			var self = this;

			// Private properties
			self.Initialize = function() {
				
				// Get show title from parent scope/state
				var showTitle = $scope.showTitle;

				var url = $scope.baseServiceUrl + '/show/related.json/' + $scope.apiKey + '/' +  showTitle +'?callback=JSON_CALLBACK';

				$http.jsonp(url).then(function(response){

					$scope.totalItem = response.data.length;
					var pageSize = 20;
					$scope.shows = response.data.slice(0, pageSize - 1);
				});
			};

			// Private functions

			// Scope properties

			// Scope functions

			// Initialization
			self.Initialize();
		});
}());