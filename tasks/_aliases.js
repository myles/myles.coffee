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

    grunt.registerTask('build', [
        'clean:build',
        'favicons',
        'assemble:build',
        'uglify:build',
        'sass:build',
        'header:stylesheet',
        'copy:assets'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'rsync:staging'
    ]);

    grunt.registerTask('deploy:production', [
        'build',
        'rsync:production'
    ]);

    grunt.registerTask('test', [
        'sasslint'
    ]);

    grunt.registerTask('default', ['develop']);
};
