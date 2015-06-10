countriesApp.factory('getNameList', ['getCountries', '$q', function(getCountries, $q) {
	return function() {
		var defer = $q.defer();
		var countryList = [];
		getCountries().then(function(result) {
			for (var i=0; i<result.length; i++) {
				name = result[i].countryName.replace(/ /g, '_');
				countryList.push(name);
			}
			defer.resolve(countryList);
		});
		return defer.promise;
	}
}])