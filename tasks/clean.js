module.exports = function (grunt) {
    'use strict';

    var config = {
        build: [
            '<%= config.destination %>/**/*',
            '!<%= config.destination %>/.keep'
        ],
        staging: [
            '<%= config_local.local_staging_dir %>/**/*'
        ]
    };

    grunt.config.set('clean', config);
};
