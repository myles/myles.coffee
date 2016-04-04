module.exports = function (grunt) {
    'use strict';

    var config = {
        stylesheet: {
            options: {
                text: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                      '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            files: {
                '<%= config.destination %>/assets/stylesheets/style.css':
                '<%= config.destination %>/assets/stylesheets/style.css'
            }
        }
    };

    grunt.config.set('header', config);
};
