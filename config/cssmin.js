module.exports = function() {
  return {
    dist: {
      files: {
        '<%= paths.dist %>/styles/main.css': [
          '<%= paths.tmp %>/styles/{,*/}*.css',
          '<%= paths.app %>/styles/{,*/}*.css'
        ]
      }
    }
  };
};