module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            args: ['--verbose'],
            exclude: ['.keep'],
            recursive: true,
            src: '<%= config.destination %>/',
            delete: true
        },
        staging: {
            options: {
                dest: '<%= config.staging.dest %>',
                host: '<%= config.staging.host %>'
            }
        },
        production: {
            options: {
                dest: '<%= config.staging.dest %>',
                host: '<%= config.staging.host %>'
            }
        }
    };

    grunt.config.set('rsync', config);
};
