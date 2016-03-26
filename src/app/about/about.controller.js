(function() {
  'use strict';

  angular
    .module('workspace')
    .controller('AboutController', AboutController);

  //controllerAs vs $scope
  // http://codetunnel.io/angularjs-controller-as-or-scope/
  /** @ngInject */
  function AboutController(){
    // old-fashioned way
    // $scope.pageTitle = 'About Us!';
    var vm = this;//vm stands for View Model => M-V-VM design pattern, similar to M-V-C
    
    vm.pageTitle = 'About Us!';
  }
})();
