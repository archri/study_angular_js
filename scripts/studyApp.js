var studyApp = angular
		.module("studyApp", [])
		.controller("studyController", function($scope) {
			var country = {
				name: 'Bulgaria',
				cities: [
					'Gabrovo',
					'Sofia',
					'Veliko Tarnovo',
					'Targovishte',
					'Plovdiv'
				]
			}
			$scope.country = country;
		});