module.exports = function (grunt) {
    'use strict';

    var config, files, load_path;

    files = [{
        expand: true,
        cwd: '<%= config.source %>/assets/stylesheets',
        src: [
            'style.scss'
        ],
        dest: '<%= config.destination %>/assets/stylesheets',
        ext: '.css'
    }];

    load_path = [
        './bower_components/',
        '<%= config.source %>/assets/stylesheets'
    ];

    config = {
        options: {
            sourceMap: true,
            includePaths: load_path
        },
        develop: {
            files: files
        },
        production: {
            files: files
        }
    };

    grunt.config.set('sass', config);
};
