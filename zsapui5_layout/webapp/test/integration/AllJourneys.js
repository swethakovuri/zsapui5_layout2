/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/Worklist",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/Object",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/NotFound",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/Browser",
	"zsapui5_layout/zsapui5_layout/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsapui5_layout.zsapui5_layout.view."
	});

	sap.ui.require([
		"zsapui5_layout/zsapui5_layout/test/integration/WorklistJourney",
		"zsapui5_layout/zsapui5_layout/test/integration/ObjectJourney",
		"zsapui5_layout/zsapui5_layout/test/integration/NavigationJourney",
		"zsapui5_layout/zsapui5_layout/test/integration/NotFoundJourney",
		"zsapui5_layout/zsapui5_layout/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});