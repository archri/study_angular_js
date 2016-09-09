var studyApp = angular.module("studyApp", []);
var studyController = function($scope) {
	$scope.studyVariable = "study variable";
}
studyApp.controller("studyController", studyController);