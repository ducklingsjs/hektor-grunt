module.exports = function(grunt) {
  var taskCompose = require('../utils/task-compose')(grunt);
  taskCompose('scripts', ['handlebars', 'notify:template']);
};