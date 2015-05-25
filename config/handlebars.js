module.exports = {
  compile: {
    options: {
      namespace: 'JST',
      amd: true
    },
    files: {
      '<%= paths.tmp %>/scripts/templates.js': ['<%= paths.app %>/scripts/templates/{,*/}*.hbs']
    }
  }
};