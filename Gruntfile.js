module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readYAML('config.yml')
    });

    grunt.loadNpmTasks('grunt-assemble');

    grunt.task.loadTasks('./tasks/');
};
