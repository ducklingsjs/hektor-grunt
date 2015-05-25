module.exports = function(grunt) {
  return function(name, definition, dependencies) {
    if (definition instanceof Array) {
      dependencies = definition.map(function(def) {
        return def.split(':')[0];
      });
    }

    dependencies.forEach(function(dependency) {
      if (!grunt.task.exists(dependency)) {
        require('../tasks/' + dependency)(grunt);
      }
    });

    grunt.registerTask(name, definition);
  };
};