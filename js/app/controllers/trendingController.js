(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('trending', {
				url: '/trending',
				templateUrl: 'views/show-list.html',
				controller: 'trendingController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('trendingController', function ($route, $scope, $http) {
			
			var self = this;

			// Private properties
			self.Initialize = function() {

				var url = $scope.baseServiceUrl + '/shows/trending.json' + $scope.apiKey + '/' + '?callback=JSON_CALLBACK';

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