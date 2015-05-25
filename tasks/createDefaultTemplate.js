module.exports = function(grunt) {
  grunt.registerTask('createDefaultTemplate', function() {
    grunt.file.write('<%= paths.tmp %>/scripts/templates.js', 'this.JST = this.JST || {};');
  });
};