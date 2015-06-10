countriesApp.factory('geoRequest', ['$http', '$q', function($http, $q) {
	return function(url, params) {
		var defer = $q.defer();
		var urlReq = url;
		if (params === undefined) {
			paramsReq = {};
		} else if (typeof params == "object") {
			paramsReq = params;
		} else {
			console.log("params must be an object");
		}
		paramsReq.username = "thinkfuldan";
		paramsReq.callback = "JSON_CALLBACK";
		$http({
			cache: true,
			url: urlReq,
			params: paramsReq,
			method: "JSONP"
		})
		.success(function(result) {
			defer.resolve(result);
		});
		return defer.promise;
	}
}])