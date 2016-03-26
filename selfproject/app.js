(function () {
    'use strict';
    //module
    //index.module.js
    angular
        .module('workspace', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngMessages',
            'ngAria',
            'ngRoute',
            'ui.bootstrap',
            'toastr'
        ])
        //constants
        //index.constants.js
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .constant('$', jQuery)
        //index.config.js
        .config(config)
        ///index.route.js
        .config(routeConfig)
         .run(runBlock);

    /** @ngInject */
    function config($logProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }


    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

//Index.run.js
  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }



})();