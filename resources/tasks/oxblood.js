/*global module:false*/
module.exports = function (grunt) {

	grunt.registerTask("oxblood", "Run Rosy + Mocha unit tests", function (mode) {
		var done = this.async();

		var fs = require("fs");
		var cp = require("child_process");

		var jsDir = "project/static/js/";
		var runner = jsDir + "test/runner.js";

		if (!fs.existsSync(runner)) {
			console.error("OxBlood not found.");
			process.exit();
		}

		var child = cp.spawn("node", [runner, "-m", mode, "-r", jsDir], {
			env: null,
			setsid: true,
			stdio: "inherit"
		});

		child.addListener("exit", function () {
			done();
		});
	});

};
