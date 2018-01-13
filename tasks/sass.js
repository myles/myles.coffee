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
        './node_modules/',
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
        build: {
            files: files,
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            }
        }
    };

    grunt.config.set('sass', config);
};
