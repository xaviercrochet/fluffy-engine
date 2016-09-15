angular.module('imagesMgmtApp')
	.service('ImageService', ImageService);

	function ImageService($q, $http) {
		var service = {
			uploadImage: uploadImage,
			deleteImage: deleteImage,
			getImages: getImages,
			getImage: getImage
		};

		return service;

		function uploadImage(image) {
			var url = apiEndpoint + "images";
			var d = $q.defer();
			return d.promise;
		};

		function deleteImage(imageId) {
			var url = apiEndpoint + "images/" + imageId;
			var d = $q.defer();
			$http.delete(url)
				.success(function(data, status, headers, config) {
					d.resolve(data);
				})
				.error(function(error){
					d.reject(error);
				});
			return d.promise;
		};

		function getImages() {
			var d = $q.defer();
			var url = apiEndpoint + "images";
			$http.get(url)
				.success(function(data, status, headers, config) {
					d.resolve(data);
				})
				.error(function(error){
					d.reject(error);
				});
			return d.promise;
		};

		function getImage(imageId) {
			var url = apiEndpoint +  "images/" + imageId;
			var d = $q.defer();
			$http.get(url)
				.success(function(data, status, headers, config) {
					d.resolve(data);
				})
				.error(function(error){
					d.reject(error);
				});
			return d.promise;
		};
	};