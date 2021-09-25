(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
	$scope.name = "";
	$scope.colorize = "black";
	$scope.bcolorize = "black";
	$scope.display = function (){
		$scope.message = "";
		var numberOfWords = calculate ($scope.name);
		if (numberOfWords < 4 && numberOfWords != 0) { $scope.message = "Enjoy!"; $scope.colorize = "green"; $scope.bcolorize = "green";}
		if (numberOfWords >= 4) { $scope.message = "Too Much!"; $scope.colorize = "green"; $scope.bcolorize = "green";}
		if (numberOfWords == 0) { $scope.message = "Enter something!"; $scope.colorize = "red"; $scope.bcolorize = "red";}
		return $scope.message ;
	}
	// I did not know about split function untill i write this if statement
	function calculate (string) {
		var count = 0;
		for (var i = 0; i < string.length; i++) {
			if (string[i] ==="," && string[i-1] !== "," && string[i-1] !== " " ) {
				count++;
			}
		}
		return count ;
	}
	//function calculate (string) {
		//var words = string.split(',');
		//var count = words.length ;
		//return count ;
		//}




}





})();
