angular.module('meanblog').controller('blogListController', blogListController);

	function blogListController($routeParams, blogDataFactory) {
		var vm = this;
		vm.title = "Mana-Ry Blogi";
		var page = $routeParams.page || 1;
		blogDataFactory.blogList(page).then(function(response) {
			console.log(response);
			vm.blogs = response.output.data;
			vm.pages = response.output.pages;
		});
	}