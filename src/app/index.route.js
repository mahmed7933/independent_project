(function() {
  'use strict';

  angular
    .module('workspace')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'/// {{about.pageTitle}}
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
