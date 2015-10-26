module.exports = (grunt) ->
  config =
    options:
      useBundle: true
    server:
      options:
        command: 'server'
        environment: 'development'
    build:
      options:
        command: 'build'
        environment: 'production'
  
  grunt.config.set 'middleman', config
