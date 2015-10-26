module.exports = (grunt) ->
  grunt.registerTask 'build', ['middleman:build']
  
  grunt.registerTask 'run', ['middleman:server']
  
  grunt.registerTask 'deploy', [ 'default', 's3', 'rsync:prod']
  
  grunt.registerTask 'test', ['scsslint', 'coffeelint']
  
  grunt.registerTask 'default', ['run']
