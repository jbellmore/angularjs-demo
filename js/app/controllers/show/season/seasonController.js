(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider, $locationProvider) {
			$stateProvider.state('show.season', {
				url: '/season/:seasonId',
				templateUrl: 'views/season.html',
				controller: 'seasonController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('seasonController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Private properties
			self.seasonId = $stateParams.seasonId;

			// Private functions
			self.Initialize = function() {

				$scope.seasonId = self.seasonId;

				var seasonUrl = $scope.baseServiceUrl + '/show/season.json/' + $scope.apiKey + '/'
					+  $scope.showTitle + '/' + self.seasonId +'?callback=JSON_CALLBACK';

				$http.jsonp(seasonUrl).then(function(response){

					$scope.episodes = response.data;

					$scope.isSeasonLoaded = true;
					$scope.$broadcast('seasonEpisodesLoaded');
				});
			};

			// Scope properties
			$scope.isSeasonLoaded = false;
			$scope.episodes = [];

			// Scope functions
			$scope.buildUrlForEpisode = function (number) {
				return '#/show/' + $scope.showTitle + '/season/' + self.seasonId + '/episode/' + number;
			};

			// Initialization
			self.Initialize();
		});

}());