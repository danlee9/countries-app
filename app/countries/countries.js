countriesApp.controller('CountriesCtrl', 
	['getCountries', 
	'getNameList',
	'$location',
	function(getCountries, getNameList, $location) {
		var self = this;
		self.isLoading = true;
		// getCountries().success(function(result) {
		// 	self.countries = result.geonames;
		// }); 
		// For above to work, getCountries must return $http instead of promise

		getCountries().then(function(result) {
			self.countries = result;
		});

		getNameList().then(function(list) {
			self.list = list;
			self.isLoading = false;
		}, function() {
			self.isLoading = false;
			alert('Error while loading');
		});

		self.click = function() {
			$location.path('/');
		}
}]);