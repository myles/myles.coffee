module.exports = (grunt) ->
  config =
    app: [
      'srouce/assets/javascripts/*.coffee',
      'Gruntfile.coffee',
      'tasks/*.coffee'
    ]
    options:
      max_line_length:
        level: 'ignore'
  
  grunt.config.set 'coffeelint', config
