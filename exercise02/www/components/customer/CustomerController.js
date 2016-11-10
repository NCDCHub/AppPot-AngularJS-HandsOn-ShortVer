angular.module("app")
.controller("CustomerController", ["$scope", "$modal", "Customer", "AppPot", function($scope, $modal, Customer, AppPot) {
	AppPot.createDatabase([Customer])
	.catch(function(error) {
		notifyError(error);
	});

	$scope.condition = {};
	
	$scope.findList = function() {
		let customerId = nullToBlank($scope.condition.customerId);
		let name = nullToBlank($scope.condition.name);
		Customer.select()
			.where("#customer.customerId like ? AND #customer.name like ?", "%" + customerId + "%", "%" + name + "%")
			.orderBy("#customer.customerId", AppPot.Model.Order.asc)
			.findList()
		.then(function(result) {
			$scope.customers = result.customer;
			$scope.$apply();
		})
		.catch(function(error) {
			notifyError(error);
		});
	};

	$scope.detailDialog = null;

	$scope.showDialog = function() {
		$scope.customer = new Customer();
		$scope.detailDialog = $modal.open({
	        templateUrl: "components/customer/customerDetail.html?v=" + new Date().getTime(),
	        backdrop: "static",
	        scope: $scope
	    });
	};
	
	$scope.saveAndCloseDialog = function() {		
		$scope.customer.insert()
		.then(function() {
			$scope.detailDialog.close();
			$scope.detailDialog = null;
			$scope.customer = null;
		})
		.catch(function(error) {
			notifyError(error);
		});
	};
	
	$scope.dismissDialog = function() {
		$scope.detailDialog.dismiss();
		$scope.detailDialog = null;
		$scope.customer = null;
	};
}]);