module.exports = function() {
  return {
    html: ['<%= paths.dist %>/{,*/}*.html'],
    css: ['<%= paths.dist %>/styles/{,*/}*.css'],
    options: {
      dirs: ['<%= paths.dist %>']
    }
  };
};