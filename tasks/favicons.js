module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            html: '<%= config.source %>/templates/partials/favicons.hbs',
            truncateHTML: true,
            HTMLPrefix: '/',
            trueColor: true,
            precomposed: true,
            appleTouchBackgroundColor: '#ff5173',
            appleTouchPadding: 20,
            coast: true,
            tileBlackWhite: false,
            tileColor: '#ff5173',
            firefox: true,
            androidHomescreen: true,
            androidIcons: true,
            indent: '        '
        },
        icons: {
            src: '<%= config.source %>/assets/images/coffee.png',
            dest: '<%= config.destination %>/'
        }
    };

    grunt.config.set('favicons', config);
};
