countriesApp.controller('CountryCtrl', 
	['country',
	'getNeighbors',
	'$location',
	function(country, getNeighbors, $location) {
		var self = this;
		self.isLoading = true;
		self.c = country;
		var code = self.c.countryCode;
		self.map = "http://www.geonames.org/img/country/250/" + code + ".png";
		
		self.home = function() {
			$location.path('/');
		};

		self.countries = function() {
			$location.path('/countries');
		}

		code = self.c.countryCode;

		getNeighbors(code).then(function(result) {
			var neighbors = [];
			for (var i=0; i<result.geonames.length; i++) {
				var name = result.geonames[i].name.replace(/ /g, '_');
				neighbors.push(name);
			}
			self.neighbors = neighbors;
			self.isLoading = false;
		}, function() {
			self.isLoading = false;
			alert('Error while loading');
		});
}]);
