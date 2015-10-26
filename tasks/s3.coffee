module.exports = (grunt) ->
  config =
    options:
      accessKeyId: '<%= aws.accessKeyId %>'
      secretAccessKey: '<%= aws.secretAccessKey %>'
      bucket: 'myles.coffee'
    
    build:
      cwd: 'build'
      src: '**'
  
  grunt.config.set 's3', config
