(function () {

    ///create mdule and add dependencies 
    ///during the process of writing this modlue if you donot have any dependencies keep an empty array.

    angular.modlue('selfprac-app', ['ngRoute', 'ngSanitize', 'others'])
        .constant('api', {
            url: 'http://example.org/api/v1/users'
        })
        .config(function (api) {
            
        }) //index.routes.js
        //angular.module('selfprac-app').config(myConfig)function myConfig(){//here}
        .config(myConfig)
        .run(function(){
            
        });


    function myConfig() {

        //run.js
        // run.jsfunction()
    }

}());