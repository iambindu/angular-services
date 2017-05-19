// app.config(["AppName","AppVersion",function(AppName,AppVersion){
// 	console.log("This is config:"+AppName);
// 	// console.log("this is value:"+AppVersion)
// }])

app.run(["AppName","AppVersion",function(AppName,AppVersion){
	console.log("This is run:"+AppName)
	console.log("this is value:"+AppVersion)
}])




app.provider("myProvider",function(){
	
		var myObj={};
		myObj.name="johnGalt";

		myObj.getName=function(){
			return this.name;
		}
		this.$get=function(){
			return myObj;
		}
	
		
})

app.service("CustomService",function(){
	this.getCustomerDetails=function(){
return "this is customer Details!!"
	}
})

app.factory("CustomFactory",function(){
	return "This is my factory"
})
app.constant("AppName","AngularService");
app.value("AppVersion","1.0.0.0")