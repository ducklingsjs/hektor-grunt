module.exports = function() {
  return {
    dist: {
      options: {
        baseUrl: '<%= paths.app %>/scripts',
        optimize: 'none',
        paths: {
          'templates': '../../.tmp/scripts/templates'
        },
        preserveLicenseComments: false,
        useStrict: true
      }
    }
  };
};