sap.ui.jsview("fiorilike2.mainView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fiorilike2.mainView
	*/ 
	getControllerName : function() {
		return "fiorilike2.mainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fiorilike2.mainView
	*/ 
	createContent : function(oController) {
 		
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true);
		
		olistCatgery =  new sap.m.List("idHdr", {
				includeItemInSelection : true,
				inset : true
			});
		 	
		 oTemplate = new sap.m.StandardListItem("idItems", {title : "{OrderID}",
		 			   description: "{CustomerID}",
		 				   type : sap.m.ListType.Navigation,
		 				   press : function(oEvent) {
		 						 oController.handlePress(oEvent); }
		 					  });
 	
 		 olistCatgery.setModel(oModel);
 	
		 olistCatgery.bindAggregation( "items", { 
		 			 path : "/Orders",
		 			 template: oTemplate
		 			 
		 		});
		/*
		var link = "proxy/http/services.odata.org/V2/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(link, true);
		
		olistOrder =  new sap.m.List("idHdr", {
			includeItemInSelection : true,
			inset : true
		});
	 	
		oTemplate = new sap.m.StandardListItem("idItems", {title : "{CompanyNa}",
	 			   description: "{ContactName}",
	 				   type : sap.m.ListType.Navigation,
	 				   press : function(oEvent) {
	 						 oController.handlePress(oEvent); }
	 					  });
	
		olistOrder.setModel(oModel);
		olistOrder.bindAggregation( "items", { 
	 			 path : "/Customers",
	 			 template: oTemplate
	 			 
	 		});
		 */
		 
		return new sap.m.Page({
			title: "things",
			content: [
			          //olistCatgery
			          olistCatgery
			]
		});
	}

});