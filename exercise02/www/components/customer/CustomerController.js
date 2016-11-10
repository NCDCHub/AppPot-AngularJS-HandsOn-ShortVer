angular.module("app")
.controller("CustomerController", ["$scope", "$modal", "Customer", "AppPot", function($scope, $modal, Customer, AppPot) {
	AppPot.createDatabase([Customer])
	.catch(error => {
		notifyError(error);
	});

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