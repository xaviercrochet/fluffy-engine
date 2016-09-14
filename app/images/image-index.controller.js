angular.module('imagesMgmtApp.images')
	.controller('ImageIndexController', ImageIndexController);

	function ImageIndexController(images, $uibModal, Upload){
		var vm = this;
		vm.images = images;

		vm.openUploadModal = openUploadModal;
		vm.generateImageUrl = generateImageUrl
		


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
				}).then(function(result){
					// todo solve image rendering issue
					vm.images.push(result.data);
				})
			});
		};
	};