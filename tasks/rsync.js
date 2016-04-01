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
                dest: '<%= config.production.dest %>',
                host: '<%= config.production.host %>'
            }
        }
    };

    grunt.config.set('rsync', config);
};
