// public/js/controllers/NerdCtrl.js

'use strict';

angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {
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

