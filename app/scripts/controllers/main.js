'use strict';

/**
 * @ngdoc function
 * @name nyeMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nyeMeApp
 */
angular.module('nyeMeApp')
	.controller('TwitterController', function ($scope, $resource, instaService) {
	
	$scope.query = '';

	$scope.searchPics = function(query) { 
		$scope.query = query;

		var newQuery = query.replace(/[^A-Z0-9]/ig, '');
		console.log(newQuery);

	    instaService.pics(newQuery).success(function(data) {
	       	$scope.pics = data.data;
	        console.log(data);
	    });
	};

	$scope.searchPics('San Diego');
});