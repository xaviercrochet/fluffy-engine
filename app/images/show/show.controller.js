angular.module('imagesMgmtApp.images.show')
	.controller('ImageShowController', ImageShowController);

	function ImageShowController($location, ImageService, image){
		var vm = this;
		vm.image = image;
		vm.deleteImage = deleteImage;
		vm.generateImageUrl = generateImageUrl;
		vm.redirectToIndexPage = redirectToIndexPage;
		vm.changePicture = changePicture;

		function changePicture(){
			//toto
		};

		function deleteImage(){
			ImageService.deleteImage(vm.image._id)
				.then(function(image){
					console.log(image);
					$location.path("/");

				}, function(error){
					// display some error message here.
				});
		};

		function redirectToIndexPage(){
			$location.path("/");
		};

		function generateImageUrl(){
			return 'http://lisadeb.com/images/'+vm.image.filename;
		};

	};