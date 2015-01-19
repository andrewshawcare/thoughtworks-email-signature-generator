/* global module, require */
module.exports = function (grunt) {
    "use strict";
    var tasksDirectory = "./tasks/";
    
    // register tasks
    require("fs").readdirSync(tasksDirectory)
        .filter(function (filename) {
            // filter non-requireable files
            return /.*\.(js|json)$/.test(filename);
        })
        .forEach(function (taskName) {
            var task = require(tasksDirectory + taskName);
            grunt.loadNpmTasks(task.name);
            grunt.config.set(task.id, task.configuration);
        });

    // register aggregate tasks
    require(tasksDirectory + "data/aggregate_tasks")
        .forEach(function (aggregateTask) {
            grunt.registerTask(aggregateTask.name, aggregateTask.tasks);
        });
};