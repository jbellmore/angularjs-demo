(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('show.season.episode', {
				url: '/episode/:episodeId',
				templateUrl: 'views/episode.html',
				controller: 'episodeController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('episodeController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Private properties
			self.episodeNumber = $stateParams.episodeId;

			// Private functions
			self.Initialize = function() {
				if(!$scope.isSeasonLoaded) {
					$scope.$on('seasonEpisodesLoaded', self.loadEpisode);
				} else {
					self.loadEpisode();
				}
			};

			self.loadEpisode = function () {
				
				for(var i=0; i<$scope.episodes.length; i++) {
					var episode = $scope.episodes[i];
					if(episode.number == self.episodeNumber) {
						$scope.episode = episode;
						if(i == 0) {
							$scope.showLastButton = false;
						}
						if(i == $scope.episodes.length - 1) {
							$scope.showNextButton = false;
						}
					}
				}
			};

			// Scope properties
			$scope.episode = {};
			$scope.showNextButton = true;
			$scope.showLastButton = true;

			// Scope functions

			// Initialization
			self.Initialize();
		});

}());