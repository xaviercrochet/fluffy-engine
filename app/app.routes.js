angular.module('imagesMgmtApp')
	.config(['$routeProvider', function($routeProvider, $locationProvider){
	  $routeProvider
	  	.when('/', {
	  		templateUrl: 'app/images/image-index.view.html',
	  		controller: 'ImageIndexController',
	  		controllerAs: 'vm',
	  		resolve: {
	  			images: function(ImageService) {
	  				return ImageService.getImages();
	  			}
	  		}
	  	});
	 }]);