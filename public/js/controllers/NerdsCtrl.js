// public/js/controllers/NerdsCtrl.js

'use strict';

angular.module('NerdsCtrl', []).controller('NerdsController', function($scope, $http) {
	$scope.tagline = 'Known qualifiers:';
	$scope.nerds = [];
	function getNerds(){
		$http.get('http://localhost:8080/api/nerds')
			.success(function(data) {
				$scope.nerds = data;
			})
			.error(function() {
				console.log('unable to load nerds');
			});
	}
	getNerds();
});

