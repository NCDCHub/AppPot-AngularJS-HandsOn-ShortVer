angular.module("app", ["ngRoute", "ui.bootstrap"])
.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/login", {
			controller: "LoginController",
			templateUrl: "components/auth/login.html?v=" + new Date().getTime()
		})
		.when("/customer", {
			controller: "CustomerController",
			templateUrl: "components/customer/customerList.html?v=" + new Date().getTime()
		})
		.otherwise({
			redirectTo: "/customer"
		});
}])
.run(["$rootScope", "$location", "$route", "AppPot", function($rootScope, $location, $route, AppPot) {

	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		if (next.controller == "LoginController") {
			if (AppPot.LocalAuthenticator.isLogined()) {
				$location.path("/");
				$route.reload();
			}
		}
		else {
			if (!AppPot.LocalAuthenticator.isLogined()) {
				$location.path("/login");
				$route.reload();
			}
		}
	});
}]);


