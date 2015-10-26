module.exports = (grunt) ->
  config =
    options:
      args: [ '--verbose' ]
      recursive: true
    prod:
      options:
        src: './build/'
        dest: '/srv/www/coffee_myles_www/html'
        host: 'myles@panda.mylesbraithwaite.com'
        port: 2222
        delete: true
  
  grunt.config.set 'rsync', config
