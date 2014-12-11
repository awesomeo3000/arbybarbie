angular.module('newsfeed')

.factory('PostService', [
	'$http',
	'$q',
	function ($http, $q) {
		return {
			getPosts: function () {
				var deferred = $q.defer();

				$http.get('/getblogs')
					.success(function (data) {
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});

				return deferred.promise;
			}
		};
	}
])