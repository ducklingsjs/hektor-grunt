module.exports = function(grunt) {
  var taskCompose = require('../utils/task-compose')(grunt);
  taskCompose('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
        'open:server',
        'connect:dist:keepalive'
      ]);
    }

    if (target === 'test') {
      return grunt.task.run([
        'clean:server',
        'createDefaultTemplate',
        'handlebars',
        'connect:test',
        'open:test',
        'watch'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'createDefaultTemplate',
      // 'translations',
      'handlebars',
      // 'spritem',
      'styles',
      'connect:livereload',
      'watch'
    ]);
}, ['build', 'open', 'connect', 'clean', 'createDefaultTemplate', 'handlebars', 'watch', 'styles']);
};
