module.exports = function (grunt) {
    'use strict';

    var files, config;

    files = {
        '<%= config.destination %>/assets/javascript/script.js': [
            '<%= config.source %>/assets/javascript/script.js'
        ]
    };

    config = {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        develop: {
            options: {
                sourceMap: true,
                beautify: true
            },
            files: files
        },
        build: {
            options: {
                sourceMap: false,
                beautify: false
            },
            files: files
        }
    };

    grunt.config.set('uglify', config);
};
