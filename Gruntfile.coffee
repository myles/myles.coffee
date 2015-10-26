module.exports = (grunt) ->
  grunt.initConfig(
    pkg: grunt.file.readJSON 'package.json'
    aws: if grunt.file.exists('.aws.json') then grunt.file.readJSON('.aws.json') else {}
  )
  
  grunt.loadNpmTasks 'grunt-aws'
  grunt.loadNpmTasks 'grunt-exec'
  grunt.loadNpmTasks 'grunt-rsync'
  grunt.loadNpmTasks 'grunt-middleman'
  grunt.loadNpmTasks 'grunt-scss-lint'
  grunt.loadNpmTasks 'grunt-coffeelint'
  
  grunt.task.loadTasks './tasks/'
