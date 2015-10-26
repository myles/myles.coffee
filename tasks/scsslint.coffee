module.exports = (grunt) ->
  config =
    allFiles: [ './source/assets/stylesheets/*.scss' ]
    options:
      bundleExec: true
  
  grunt.config.set 'scsslint', config
