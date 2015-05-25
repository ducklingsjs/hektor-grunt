module.exports = function() {
  return {
    dist: ['<%= paths.tmp %>', '<%= paths.dist %>/*'],
    server: '<%= paths.tmp %>',
    phonegap: ['<%= paths.phonegap %>/www']
  };
};