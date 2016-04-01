module.exports = function (grunt) {
    'use strict';

    var config = {
        build: [
            '<%= config.destination %>/**/*',
            '!<%= config.destination %>/.keep',
            '!<%= config.destination %>/*.png',
            '!<%= config.destination %>/*.ico'
        ]
    };

    grunt.config.set('clean', config);
};
