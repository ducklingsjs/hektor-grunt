module.exports = function() {
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
      'Gruntfile.js',
      '<%= paths.app %>/scripts/{,*/}*.js',
      '!<%= paths.app %>/scripts/vendor/*',
      '<%= paths.test %>/spec/{,*/}*.js'
    ]
  };
};