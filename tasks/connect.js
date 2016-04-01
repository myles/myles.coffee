module.exports = function (grunt) {
    'use strict';

    var config = {
        server: {
            options: {
                port: 4000,
                base: '<%= config.destination %>/',
                livereload: true
            }
        }
    };

    grunt.config.set('connect', config);
};
