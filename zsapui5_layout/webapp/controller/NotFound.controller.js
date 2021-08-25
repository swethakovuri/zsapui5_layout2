sap.ui.define([
		"zsapui5_layout/zsapui5_layout/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zsapui5_layout.zsapui5_layout.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);