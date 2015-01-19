/* global module, require */
module.exports = function (grunt) {
    "use strict";
    var fs = require("fs"),
        tasksDirectory = "./tasks/",
        taskNames = fs.readdirSync(tasksDirectory).filter(function (filename) {
            // filter non-JavaScript files
            return /.*\.js$/.test(filename);
        }),
        aggregateTasks = require(tasksDirectory + "data/aggregate_tasks");

    taskNames.forEach(function (taskName) {
        var task = require(tasksDirectory + taskName);
        grunt.loadNpmTasks(task.name);
        grunt.config.set(task.id, task.configuration);
    });

    aggregateTasks.forEach(function (aggregateTask) {
        grunt.registerTask(aggregateTask.name, aggregateTask.tasks);
    });
};