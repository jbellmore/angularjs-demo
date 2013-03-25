(function() {

  // Define the controller
  angular.module('angularDemo')
    .controller('mainController', function ($scope, $state) {
      
      var self = this;

      // Private properties

      // Private functions

      // Scope properties
      $scope.searchCriteria = '';

      $scope.$state = $state;

      // Scope functions

      $scope.search = function() {
        //alert($scope.searchCriteria);

        $state.transitionTo('search', { criteria: $scope.searchCriteria });

        $scope.searchCriteria = '';
      };

      $scope.getShowNameFromUrl = function(url) {
        if(url == undefined) {
          return '';
        } else {
          return url.replace('http://trakt.tv/show/', '');
        }
      };

      // Initialization
    });

}());