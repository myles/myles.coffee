module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('develop', [
        'favicons',
        'assemble:develop',
        'uglify:develop',
        'sass:develop',
        'copy:assets',
        'imagemin',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:build',
        'favicons',
        'assemble:build',
        'htmlmin:build',
        'uglify:build',
        'sass:build',
        'header:stylesheet',
        'copy:assets',
        'imagemin'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'rsync:staging'
    ]);

    grunt.registerTask('deploy:production', [
        'build',
        'rsync:production'
    ]);

    grunt.registerTask('distribute', [
        'build',
        'compress:distribute'
    ]);

    grunt.registerTask('test', [
        'sasslint'
    ]);

    grunt.registerTask('default', ['develop']);
};
