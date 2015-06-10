countriesApp.factory('getCountries', 
	['geoRequest',
	'$q',
	function(geoRequest, $q) {
		return function() {
			var defer = $q.defer();
			var url = 'http://api.geonames.org/countryInfoJSON'
			geoRequest(url).then(function(result) {
				defer.resolve(result.geonames);
			});
			return defer.promise;
		}
}]);