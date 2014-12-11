'use strict';

angular.module('newsfeed').controller('CreatePostCtrl', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$scope.currentPost = {
			author: '',
			title: '',
			content: ''
		};

		$scope.saving = false;

		$scope.savePost = function () {
			$scope.saving = true;
			$http.post('/saveblog', $scope.currentPost)
				.success(function () {
					$scope.createForm.$setPristine();
					$scope.createForm.$setUntouched();
					$scope.currentPost = {};
					console.log('Saved to db!');
				})
				.error(function () {
					$scope.createForm.$setPristine();
					$scope.createForm.$setUntouched();
					$scope.saving = false;
					$scope.currentPost = {};
					console.log('An error occurred');
				});
		};
	}
]);