countriesApp.controller('CountriesCtrl', 
	['getCountries', 
	'getNameList',
	'$location',
	'$timeout',
	function(getCountries, getNameList, $location, $timeout) {
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
			$timeout(function() {
				var rows = document.querySelectorAll('.clickable-row');
				for (var i=0; i<rows.length; i++) {
					rows[i].addEventListener('click', function(event) {
						var current = event.target;
						var link = current.querySelector('a');
						var click = new Event('click');
						link.dispatchEvent(click);
					});
				}
			}, 300);
			self.isLoading = false;
		}, function() {
			self.isLoading = false;
			alert('Error while loading');
		});

		self.click = function() {
			$location.path('/');
		}
}]);