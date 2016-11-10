angular.module("app")
.controller("CustomerController", ["$scope", "$modal", "Customer", "AppPot", function($scope, $modal, Customer, AppPot) {
	AppPot.createDatabase([Customer])
	.catch(error => {
		notifyError(error);
	});

	this.condition = {};
	
	this.findList = function() {
		let customerId = nullToBlank(this.condition.customerId);
		let name = nullToBlank(this.condition.name);
		Customer.select()
			.where("#customer.customerId like ? AND #customer.name like ?", "%" + customerId + "%", "%" + name + "%")
			.orderBy("#customer.customerId", AppPot.Model.Order.asc)
			.findList()
		.then(result => {
			this.customers = result.customer;
			$scope.$apply();
		})
		.catch(error => {
			notifyError(error);
		});
	};

	this.detailDialog = null;

	this.showDialog = function() {
		this.customer = new Customer();
		this.detailDialog = $modal.open({
	        templateUrl: "components/customer/customerDetail.html?v=" + new Date().getTime(),
	        backdrop: "static",
	        scope: $scope
	    });
	};
	
	this.saveAndCloseDialog = function() {		
		this.customer.insert()
		.then(() => {
			this.detailDialog.close();
			this.detailDialog = null;
			this.customer = null;
		})
		.catch(error => {
			notifyError(error);
		});
	};
	
	this.dismissDialog = function() {
		this.detailDialog.dismiss();
		this.detailDialog = null;
		this.customer = null;
	};
}]);