(function(){
	app.controller('TalkCategoriesController', ['$scope', '$location', 'dataService', 'DataFactory', 
		function($scope, $location, dataService, DataFactory){
		$scope.error = '';
		
		var config = {
			method : 'GET',
			url : 'http://prazor.com/rest/getTalkCategories'
		}

		dataService.getData(config).then(
			function(response){
				$scope.categories = response.data.categories;
			},function(error){
				console.log(error);
			});	

		$scope.setCategory = function(category){
			$scope.$emit('stopAudio');
			DataFactory.currentCategory = category;
			$location.url('talk/talk');
		};
	}]);
})();