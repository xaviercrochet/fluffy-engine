angular.module('imagesMgmtApp')
	.config(['$routeProvider', function($routeProvider){
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
	  	})
	  	.when('/:imageId', {
	  		templateUrl: 'app/images/show/show.view.html',
	  		controller: 'ImageShowController',
	  		controllerAs: 'vm',
	  		resolve: {
	  			image: function(ImageService, $route) {
	  				return ImageService.getImage($route.current.params.imageId);
	  			}
	  		}
	  	});
	 }]);