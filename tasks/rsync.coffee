module.exports = (grunt) ->
  config =
    options:
      args: [ '--verbose' ]
      recursive: true
    prod:
      options:
        src: './build/'
        dest: '/srv/www/myles.coffee/www/html'
        host: 'bear.mylesbraithwaite.com'
        port: 22
        delete: true
  
  grunt.config.set 'rsync', config
