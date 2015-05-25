module.exports = function(grunt) {
  var taskCompose = require('../utils/task-compose')(grunt);
  taskCompose('styles', ['sass', 'autoprefixer']);
};