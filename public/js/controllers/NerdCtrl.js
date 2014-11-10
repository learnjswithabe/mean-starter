// public/js/controllers/NerdCtrl.js

'use strict';

angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http, $routeParams) {
	console.log('$routeParams.nerdId=' + $routeParams.nerdId);
	$scope.nerdId = $routeParams.nerdId;
	$scope.name = 'name';
	function getNerd() {
		console.log('http://localhost:8080/api/nerds/' + $routeParams.nerdId);
		$http.get('http://localhost:8080/api/nerds/' + $routeParams.nerdId)
			.success(function(data) {
				console.log('data=' + data);
				console.log('data.name=' + data.name);
				$scope.name = data.name;
			})
			.error(function() {
				console.log('unable to load nerd: nerdId=' + $routeParams.nerdId);
			});
	}
	getNerd();
});

