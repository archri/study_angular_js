var studyApp = angular
		.module("studyApp", [])
		.controller("studyController", function($scope) {
			var country = {
				name: "Bulgaria",
				capital: "Sofia",
				flag: "images/Flag_of_Bulgaria.svg"
			}
			$scope.country = country;
		});