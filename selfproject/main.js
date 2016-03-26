/// we use main module to utilize the other modules that are created within the project 
///angularjs frame work carries built in function that help extend one module into another module
///main.js is the getter function which gets the instruction code that has been set in other modules within the current project.
/// below is the code that is getting instruction form other module

//getting the app here


//assigning the controller
//app.controller();

//assigning the controller to the app..


'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
  
  angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])