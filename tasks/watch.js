module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            livereload: true
        },
        sass: {
            tasks: 'sass:develop',
            files: [
                '<%= config.source %>/assets/stylesheets/**/*.scss'
            ]
        },
        javascript: {
            tasks: 'uglify:develop',
            files: [
                '<%= config.source %>/assets/javascript/**/*.js'
            ]
        },
        html: {
            tasks: 'assemble:develop',
            files: [
                '<%= config.source %>/**/*.hbs'
            ]
        }
    };

    grunt.config.set('watch', config);
};
