module.exports = function(port) {
  return {
    options: {
      nospawn: true,
      livereload: true
    },
    sass: {
      files: ['<%= paths.app %>/styles/**/*.{scss,sass}'],
      tasks: ['sass', 'autoprefixer:dist', 'notify:scss', 'scsslint']
    },
    livereload: {
      options: {
        livereload: port || 10100
      },
      files: [
        '<%= paths.app %>/*.html',
        '<%= paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        '<%= paths.app %>/scripts/templates/**/*.{ejs,mustache,hbs}',
        '{<%= paths.tmp %>,<%= paths.app %>}/styles/**/*.css',
        '{<%= paths.tmp %>,<%= paths.app %>}/scripts/**/*.js'
      ]
    },
    jshint: {
      files: ['<%= paths.app %>/scripts/**/*.js'],
      tasks: ['jshint']
    },
    handlebars: {
      files: ['<%= paths.app %>/scripts/templates/**/*.hbs'],
      tasks: ['handlebars', 'notify:template']
    }
  };
};