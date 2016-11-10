angular.module("app")
.controller("CustomerController", ["Customer", "AppPot", function(Customer, AppPot) {
	AppPot.createDatabase([Customer])
	.catch(error => {
		notifyError(error);
	});
}]);