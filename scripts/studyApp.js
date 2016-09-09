var studyApp = angular
		.module("studyApp", [])
		.controller("studyController", function($scope) {
			var country = {
				name: "Bulgaria",
				capital: "Sofia",
			}
			$scope.country = country;
		});