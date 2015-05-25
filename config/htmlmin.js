module.exports = function() {
  return {
    dist: {
      options: {},
      files: [{
        expand: true,
        cwd: '<%= paths.app %>',
        src: '*.html',
        dest: '<%= paths.dist %>'
      }]
    }
  };
};