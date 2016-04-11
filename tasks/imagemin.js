module.exports = function (grunt) {
    'use strict';

    var config = {
        images: {
            files: [{
                expand: true,
                cwd: '<%= config.source %>/assets/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: '<%= config.destination %>/assets/images/'
            }]
        }
    };

    grunt.config.set('imagemin', config);
};
