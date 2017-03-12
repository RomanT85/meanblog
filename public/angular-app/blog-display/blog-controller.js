angular.module('meanblog').controller('blogController', blogController);

	function blogController($routeParams, blogDataFactory) {
		var vm = this;
		var id = $routeParams.id;
		blogDataFactory.blogDisplay(id).then(function(response) {
			//console.log(response);
			vm.blog = response;
		});
	}