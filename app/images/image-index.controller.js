angular.module('imagesMgmtApp.images')
	.controller('ImageIndexController', ImageIndexController);

	function ImageIndexController(ImageService, images, $uibModal, $location, Upload){
		var vm = this;
		vm.images = format(images);

		vm.openUploadModal = openUploadModal;
		vm.generateImageUrl = generateImageUrl;
		vm.redirectToShowView = redirectToShowView;

		function redirectToShowView(imageId){
			$location.path('/' + imageId);
		};
		
		function format(imagesArray) {
			var numberOfRow = Math.floor(imagesArray.length/4);
			var formatedArray = [];
			for(var i = 0; i < numberOfRow; i ++){
				formatedArray.push(imagesArray.slice(i*4, (i+1)*4));
			}
 			return formatedArray;
		}


		function generateImageUrl(filename){
			return 'http://lisadeb.com/images/'+filename;
		}


		function openUploadModal() {
			var modalOptions = {
				animation: false,
				templateUrl: 'app/images/upload/upload.view.html',
				controller: 'ImageUploadController',
				controllerAs: 'vm',
				size: 'sm'
			};

			var modalInstance = $uibModal.open(modalOptions);

			modalInstance.result.then(function(image){
				Upload.upload({
					url: apiEndpoint + 'images',
					data: {
						file: image
					}
				}).then(function(response){
					var imageId = response.data._id;
					redirectToShowView(imageId);
				}).catch(function(error){
					console.error(error);
				});
			});
		};
	};