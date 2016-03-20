module.exports = function (grunt) {
    'use strict';

    var config = {
        target: [
            '<%= config.source %>/assets/stylesheets/**/*.scss'
        ]
    };

    grunt.config.set('sasslint', config);
};
