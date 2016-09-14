angular.module('imagesMgmtApp.images.upload')
	.controller('ImageUploadController', ImageUploadController);

	function ImageUploadController($uibModalInstance) {
		var vm = this;

		vm.cancel = cancel;
		vm.ok = ok;

		function ok(){
			$uibModalInstance.close(vm.image);
		};

		function cancel(){
			$uibModalInstance.dismiss('cancel');
		}
	};