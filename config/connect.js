module.exports = function(grunt, paths, serverPort, livereloadPort) {

  var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  var lrSnippet = require('connect-livereload')({
    port: livereloadPort
  });

  return {
    options: {
      port: grunt.option('port') || serverPort,
      // change this to '0.0.0.0' to access the server from outside
      hostname: '0.0.0.0'
    },
    livereload: {
      options: {
        middleware: function(connect) {
          return [
            lrSnippet,
            mountFolder(connect, paths.tmp),
            mountFolder(connect, paths.app)
          ];
        }
      }
    },
    dist: {
      options: {
        middleware: function(connect) {
          return [
            mountFolder(connect, paths.dist)
          ];
        }
      }
    }
  };
};