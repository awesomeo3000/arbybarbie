'use strict';

angular.module('newsfeed', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/viewposts', {
				templateUrl: '/partials/viewposts',
				controller: 'ViewPostsCtrl'
			})
			.when('/createpost', {
				templateUrl: '/partials/createpost',
				controller: 'CreatePostCtrl'
			})
			.otherwise({
				redirectTo: '/createpost'
			});

		$locationProvider.html5Mode(true);
	}
]);