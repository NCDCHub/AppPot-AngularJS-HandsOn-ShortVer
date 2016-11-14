angular.module("app")
.value("AppPot", AppPotSDK.getService({
  url: "http://trial.apppot.net/apppot",
  appId: "",
  appKey: "",
  appVersion: "",
  companyId: 0
}));