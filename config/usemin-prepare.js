module.exports = function() {
  return {
    html: '<%= paths.app %>/index.html',
    options: {
      dest: '<%= paths.dist %>'
    }
  };
};