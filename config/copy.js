module.exports = function() {
  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= paths.app %>',
        dest: '<%= paths.dist %>',
        src: [
          '*.{ico,txt}',
          '.htaccess',
          'images/{,*/}*.{webp,gif,png,jpg,svg}',
          'styles/fonts/{,*/}*.*',
          'mock/*',
          'fonts/*',
          'vendor/{,*/}*.*'
        ]
      }]
    },
    phonegap: {
      files: [{
        expand: true,
        cwd: '<%= paths.dist %>',
        dest: '<%= paths.phonegap %>/www',
        src: ['**/*.*']
      }, {
        expand: true,
        cwd: '<%= paths.assets %>/res',
        src: ['**/*.*'],
        dest: '<%= paths.phonegap %>/res'
      }, {
        '<%= paths.phonegap %>/config.xml': '<%= paths.assets %>/config.xml'
      }]
    }
  };
};