angular.module('countriesApp', ['ngRoute', 'ngAnimate']);

var countriesApp = angular.module('countriesApp');

countriesApp.run(['$rootScope', function($rootScope) {
	$rootScope.loaded = false;
}]);

countriesApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl as home'
	})
	.when('/countries', {
		templateUrl: 'countries/countries.html',
		controller: 'CountriesCtrl as countries'
	})
	.when('/countries/:country', {
		templateUrl: 'countries/country.html',
		controller: 'CountryCtrl as country',
		resolve: {
			country: [
				'getNameList',
				'getCountries',
				'$route',
				'$location',
				'$q',
				function(getNameList, getCountries, $route, $location, $q) {
					var current = $route.current.params.country;
					var defer = $q.defer();
					getNameList().then(function(result) {
						var index = result.indexOf(current);
						if (index == -1) {
							$location.path('/error');
							return;
						}
						getCountries().then(function(countries) {
							defer.resolve(countries[index]);
						});
					})
					return defer.promise;
				}
			]
		}
	})
	.otherwise('/');
}]);