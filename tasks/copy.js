module.exports = function (grunt) {
    'use strict';

    var config = {
        assets: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.source %>/assets/images/',
                    src: ['**'],
                    dest: '<%= config.destination %>/assets/images'
                },
                {
                    expand: true,
                    cwd: '<%= config.source %>/assets/javascript/libs/',
                    src: ['**'],
                    dest: '<%= config.destination %>/assets/javascript/libs'
                }
            ]
        }
    };

    grunt.config.set('copy', config);
};
