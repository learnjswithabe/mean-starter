// public/js/controllers/NerdCtrl.js

'use strict';

angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http, $routeParams) {
	$scope.nerdId = $routeParams.nerdId;
	// $scope.nerd;
	// function getNerd(nerdId){
	//	$http.get('http://localhost:8080/api/nerds/nerdId')
	//		.success(function(data) {
	//			$scope.nerd = data;
	//		})
	//		.error(function() {
	//			console.log('unable to load nerd: nerdId=' + nerdId);
	//		});
	// }
	// getNerd($scope.nerdId);
});

