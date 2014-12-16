'use strict';

/**
 * @ngdoc function
 * @name nyeMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nyeMeApp
 */
angular.module('nyeMeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
