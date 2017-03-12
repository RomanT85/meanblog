angular.module('meanblog').factory('blogDataFactory', blogDataFactory);
	
	function blogDataFactory($http) {
		return {
			blogList: blogList,
			blogDisplay: blogDisplay
		};

		function blogList(page) {
			return $http.get("/api/blogs?page="+page).then(complete).catch(failed);
		}

		function blogDisplay(id) {
			return $http.get("/api/blogs/" + id).then(complete).catch(failed);			
		}

		function complete(response) {
			return response.data;
		}

		function failed(error) {
			console.log(error.statusText);
			return error.statusText;
		}
	}