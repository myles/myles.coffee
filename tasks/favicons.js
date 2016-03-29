module.exports = function (grunt) {
    'use strict';

    var config = {
        options: {
            trueColor: true,
            precomposed: true,
            appleTouchBackgroundColor: '#ff5173',
            appleTouchPadding: 20,
            coast: true,
            tileBlackWhite: false,
            tileColor: '#ff5173',
            firefox: true,
            androidHomescreen: true,
            indent: '',
            /* html: '<%= config.source %>/templates/partials/favicons.hbs' */
        },
        icons: {
            src: '<%= config.source %>/assets/images/coffee.png',
            dest: '<%= config.destination %>/'
        }
    };

    grunt.config.set('favicons', config);
};
