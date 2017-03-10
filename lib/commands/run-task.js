'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Runs any Gulp task registered into Electric. Including plugins tasks.',
	name: 'run-task',
	run: function(options) {
		let taskName = options._[1];
		runTask(taskName);
	}
};
