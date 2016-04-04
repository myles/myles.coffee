module.exports = function (grunt) {
    'use strict';

    var config, files;

    files = [{
        expand: true,
        cwd: '<%= config.source %>/pages',
        src: '**/*.hbs',
        dest: '<%= config.destination %>'
    }];

    config = {
        options: {
            plugins: [
                'grunt-assemble-sitemap',
                'grunt-assemble-permalinks'
            ],
            data: [
                './config.yml',
                '<%= config.source %>/data/*.yml'
            ],
            flatten: true,
            helpers: '<%= config.source %>/helpers/helpers-*.js',
            layoutdir: '<%= config.source %>/templates/layouts',
            partials: [
                '<%= config.source %>/templates/partials/*.hbs',
                '<%= config.source %>/templates/icons/*.svg'
            ],
            layout: 'base.hbs',
            permalinks: {
                structure: ':basename/index.html'
            },
            sitemap: {
                homepage: '<%= config.url %>',
                changefreq: 'weekly',
                relativedest: true,
                robot: true
            }
        },
        develop: {
            options: {
                develop: true,
                production: false
            },
            files: files
        },
        build: {
            options: {
                develop: false,
                production: true
            },
            files: files
        }
    };

    grunt.config.set('assemble', config);
};
