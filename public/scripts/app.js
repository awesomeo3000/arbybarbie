'use strict';

angular.module('arbybarbie', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: '/partials/home',
				controller: 'HomeCtrl'
			})
			.when('/betlog', {
				templateUrl: '/partials/betlog',
				controller: 'BetLogCtrl'
			})
			.otherwise({
				redirectTo: '/home'
			});

		$locationProvider.html5Mode(true);
	}
]);