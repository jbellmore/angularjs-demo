(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('search', {
				url: '/search?criteria',
				templateUrl: 'views/show-list.html',
				controller: 'searchController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('searchController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Private properties
			self.Initialize = function() {
				var searchCriteria = $stateParams.criteria.replace(/ /g, '-');
				var url = $scope.baseServiceUrl  + '/search/shows.json/' + $scope.apiKey + '/' +  searchCriteria +'?callback=JSON_CALLBACK';

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