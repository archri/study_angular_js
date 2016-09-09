var studyApp = angular
		.module("studyApp", [])
		.controller("studyController", function($scope) {
			var country = {
				name: 'Bulgaria',
				cities: [
					{
						name: 'Gabrovo',
						inhabitants: 0
					}, {
						name: 'Sofia',
						inhabitants: 0
					}, {
						name: 'Veliko Tarnovo',
						inhabitants: 0
					}, {
						name: 'Targovishte',
						inhabitants: 0
					}, {
						name: 'Plovdiv',
						inhabitants: 0
					}
				]
			};
			$scope.country = country;
			
			$scope.increaseInhabitants = function(city) {
				city.inhabitants++;
			};
			
			$scope.decreaseInhabitants = function(city) {
				city.inhabitants--;
			};
		});