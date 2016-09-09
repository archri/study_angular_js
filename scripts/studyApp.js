var studyApp = angular
		.module("studyApp", [])
		.controller("studyController", function($scope) {
			var employee = {
				firstName: "Hristo",
				lastName: "Hristov",
				gender: "male"
			}
			$scope.employee = employee;
		});