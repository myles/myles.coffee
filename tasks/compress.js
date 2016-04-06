module.exports = function (grunt) {
    'use strict';

    var config = {
        distribute: {
            options: {
                mode: 'tgz',
                archive: '<%= config.distribute %>/myles-coffee-' +
                         grunt.template.today("yyyy-mm-dd-HH-MM-ss") +
                         '.tar.gz'
            },
            files: [{
                expand: true,
                cwd: '<%= config.destination %>',
                src: ['**']
            }]
        }
    };

    grunt.config.set('compress', config);
};
