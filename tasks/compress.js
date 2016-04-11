module.exports = function (grunt) {
    'use strict';

    var config = {
        distribute: {
            options: {
                mode: 'tgz',
                archive: '<%= config.distribute %>/myles-coffee-v' +
                         grunt.template.today("yyyy-mm-dd") +
                         '.tar.gz'
            },
            files: [{
                expand: true,
                cwd: '<%= config.destination %>',
                src: ['**'],
                dest: 'myles.coffee-www-v' +
                      grunt.template.today("yyyy-mm-dd")
            }]
        }
    };

    grunt.config.set('compress', config);
};
