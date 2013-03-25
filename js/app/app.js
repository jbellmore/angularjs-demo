(function(){
  
  // Define modules
  angular.module("angularDemo",
    // module dependencies
    ['ui.compat',
    'ngCookies']);  

  angular.module("angularDemo")
    .config(['$routeProvider', function($routeProvider) {
      // Configure module
      $routeProvider
        .when('', { redirectTo: '/trending' });
    }])
    .run(function($rootScope, $cookies) {
      var self = this;

      // Private variables

      // Root scope properties
      $rootScope.title = 'AngularJS Demo';
      $rootScope.apiKey = '';
      $rootScope.baseServiceUrl = 'http://api.trakt.tv';

      // Root scope functions

      // Get the API key to use in all the calls to trakTV services
      if($cookies.apiKey != undefined && $cookies.apiKey.length > 0) {
        $rootScope.apiKey = $cookies.apiKey;
      } else {
        $rootScope.apiKey = prompt('Enter the trakt.tv api key to use for service calls.');
        $cookies.apiKey = $rootScope.apiKey;
      }
    });

}());