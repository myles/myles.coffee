module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('develop', [
        'assemble:develop',
        'uglify:develop',
        'sass:develop',
        'copy:assets',
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', ['develop']);
};