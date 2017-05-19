var app=angular.module("myApp",[]);

// app.run(["CustomService",function(CustomService){
// 	console.log("My Run Service:"+CustomService.getCustomerDetails())
// }])



// app.config(["myProviderProvider",function(myProvider){
// 	console.log(myProvider.$get().name)
// 	console.log(myProvider.$get().getName())
// }])




app.controller("MyController",["$scope","myProvider","CustomService","CustomFactory","AppName","AppVersion",function($scope,myProvider,CustomService,CustomFactory,AppName,AppVersion){
	console.log("My Controller-Provider:"+myProvider.name)

	console.log("mycontroller-service:"+CustomService.getCustomerDetails())
	$scope.customerMessage=CustomService.getCustomerDetails();
	console.log(CustomFactory);
	$scope.CustomFactoryMessage=CustomFactory
	console.log(AppName)
	$scope.appName=AppName
}])