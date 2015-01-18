/* global module, require */
module.exports = function (grunt) {
    "use strict";
    var npmTasks = require("./npm_tasks")(grunt);

    npmTasks.tasks.forEach(function (task) {
        grunt.loadNpmTasks(task.name);
        grunt.config.set(task.id, task.configuration);
    });

    npmTasks.aggregateTasks.forEach(function (aggregateTask) {
        grunt.registerTask(aggregateTask.name, aggregateTask.tasks);
    });
};