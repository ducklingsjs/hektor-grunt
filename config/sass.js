module.exports = {
  options: {
    sourceMap: false,
    includePaths: ['<%= paths.app %>/bower_components', '<%= paths.tmp %>/styles']
  },
  dist: {
    files: {
      '<%= paths.tmp %>/styles/main.css': '<%= paths.app %>/styles/main.scss'
    }
  }
};