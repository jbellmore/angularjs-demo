(function() {
	// Define the state for this controller
	angular.module('angularDemo')
		.config(function($stateProvider) {
			$stateProvider.state('show', {
				url: '/show/:title',
				templateUrl: 'views/show.html',
				controller: 'showController'
			});
		});

	// Define the controller
	angular.module('angularDemo')
		.controller('showController', function ($scope, $http, $stateParams) {
			
			var self = this;

			// Private properties
			self.Initialize = function() {

				// Load the show summary information
				var showTitle = $stateParams.title;

				$scope.showTitle = showTitle;

				var summaryUrl = $scope.baseServiceUrl + '/show/summary.json/' + $scope.apiKey + '/' +  showTitle +'?callback=JSON_CALLBACK';

				$http.jsonp(summaryUrl).then(function(response){

					$scope.details = response.data;
				});

				// Load the show season's information
				var seasonUrl = $scope.baseServiceUrl + '/show/seasons.json/' + $scope.apiKey + '/' +  showTitle +'?callback=JSON_CALLBACK';

				$http.jsonp(seasonUrl).then(function(response){

					$scope.seasons = response.data.reverse();
				});
			};

			// Private functions

			// Scope properties


			// Scope functions
			$scope.getBackgroundImageStyle = function(item) {
				if(item == undefined) {
					return {};
				}

			   return { 'background-image': "url('" + item + "')"  }
			}

			$scope.getSeasonsTitleButtonText = function() {
				if($scope.seasonId == undefined) {
					return 'Seasons';
				} else {
					return 'Season ' + $scope.seasonId;
				}
			}

			$scope.renderCommaIfNotLast = function(isLast) {
				return (isLast == false ? ', ' : '');
			};

			// Initialization
			self.Initialize();
		});

}());