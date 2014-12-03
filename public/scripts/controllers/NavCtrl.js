'use strict';

angular.module('arbybarbie').controller('NavCtrl', [
	'$scope',
	'$location',
	function ($scope, $location) {
		$scope.navPages = [{
			navDisplay: 'Home',
			navPath: '/home'
		}, {
			navDisplay: 'Bet Log',
			navPath: '/betlog'
		}];

		$scope.isActive = function (path) {
			console.log('path is', path);
			console.log('location is', $location.path());
			return path === $location.path();
		};

	}
]);