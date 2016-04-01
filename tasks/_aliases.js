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
        'assemble:production',
        'uglify:production',
        'sass:production',
        'copy:assets'
    ]);

    grunt.registerTask('deploy', [
        'clean:build',
        'build',
        'rsync:staging'
    ]);

    grunt.registerTask('deploy:production', [
        'clean:build',
        'build',
        'rsync:production'
    ]);

    grunt.registerTask('test', [
        'sasslint'
    ]);

    grunt.registerTask('default', ['develop']);
};
