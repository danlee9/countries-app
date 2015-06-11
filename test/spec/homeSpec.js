describe('HomeCtrl', function() {
	beforeEach(module('countriesApp'));
	var ctrl;
	beforeEach(inject(function($controller) {
		ctrl = $controller('HomeCtrl');
	}));

	it('should initially have isLoading be true then false', 
		inject(function($timeout) {
			expect(ctrl.isLoading).toBe(true);
			$timeout(function() {
				expect(ctrl.isLoading).toBe(false);
			}, 2000);
		}));

	it('should change url when clicked', 
		inject(function($location) {
			ctrl.click();
			expect($location.path()).toEqual('/countries');
		}));
});