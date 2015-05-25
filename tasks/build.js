module.exports = function(grunt) {
  var taskCompose = require('../utils/task-compose')(grunt);

  taskCompose('build', [
    'clean:dist',
    'createDefaultTemplate',
    'handlebars',
    'sass',
    'autoprefixer',
    'useminPrepare',
    // 'requirejs',
    'imagemin',
    'htmlmin',
    // 'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin',
    'copy:index'
  ]);
};