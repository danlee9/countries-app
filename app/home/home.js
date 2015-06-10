countriesApp.controller('HomeCtrl', ['$location', '$timeout',
 function($location, $timeout) {
	var self = this;
	self.isLoading = true;
	$timeout(function() {
		self.isLoading = false;
	}, 1000);
	self.click = function() {
		$location.path('/countries');
	};
}]);