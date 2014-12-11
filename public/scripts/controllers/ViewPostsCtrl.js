'use strict';

angular.module('newsfeed').controller('ViewPostsCtrl', [
	'$scope',
	'PostService',
	function ($scope, PostService) {
		$scope.posts = {};

		$scope.getPosts = function () {
			PostService.getPosts().then(function (data) {
					$scope.posts = data;
				},
				function (data) {
					console.log('error');
				});
		};
	}
]);