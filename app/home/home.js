countriesApp.controller('HomeCtrl', ['$location', '$timeout', '$rootScope',
 function($location, $timeout, $rootScope) {
	var self = this;
	console.log($rootScope.loaded);
	if (!$rootScope.loaded) {
		self.isLoading = true;
		$timeout(function() {
			self.isLoading = false;
			$rootScope.loaded = true;
		}, 1000);
	}
	
	self.click = function() {
		$location.path('/countries');
	};
}]);