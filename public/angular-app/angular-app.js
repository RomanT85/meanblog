angular.module('meanblog', ['ngRoute']).config(config);
	
	function config($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "angular-app/blog-list/main.html",
				controller: blogListController,
				controllerAs: 'vm'
			})
			.when("/blog/:id", {
				templateUrl: "angular-app/blog-display/show.html",
				controller: blogController,
				controllerAs: 'vm'
			});
	}