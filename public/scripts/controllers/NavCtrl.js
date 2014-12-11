'use strict';

angular.module('newsfeed').controller('NavCtrl', [
	'$scope',
	'$location',
	function ($scope, $location) {
		$scope.navPages = [{
			navDisplay: 'Create Post',
			navPath: '/createposts'
		}, {
			navDisplay: 'View Posts',
			navPath: '/viewposts'
		}];

		$scope.isActive = function (path) {
			return path === $location.path();
		};

	}
]);