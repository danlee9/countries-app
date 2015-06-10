countriesApp.factory('getNeighbors', ['geoRequest', '$q', function(geoRequest, $q) {
	return function(code) {
		var defer = $q.defer();
		var url = 'http://api.geonames.org/neighboursJSON';
		var countryParam = {country: code};
		geoRequest(url, countryParam).then(function(neighbors) {
			defer.resolve(neighbors);
		});
		return defer.promise;
	};
}]);