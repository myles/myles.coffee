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

    grunt.registerTask('staging', [
        'clean:build',
        'assemble:production',
        'uglify:production',
        'sass:production',
        'copy:assets',
        'rsync:staging'
    ]);

    grunt.registerTask('test', [
        'sasslint'
    ]);

    grunt.registerTask('default', ['develop']);
};
