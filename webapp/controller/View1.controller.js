sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("xml.XMLMODEL.controller.View1", {
	 onInit: function(oEvt) {
          var oModel = new sap.ui.model.xml.XMLModel();
          oModel.loadData("data.xml");
          this.getView().setModel(oModel);
         /* oModel.attachRequestCompleted(function(oEvent) {
            sap.ui.getCore().setModel(oEvent.getSource());
          });*/
        }
	});
});