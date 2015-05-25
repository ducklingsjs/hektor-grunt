module.exports = {
  server: {
    path: 'http://localhost:<%= ports.server %>'
  },
  test: {
    path: 'http://localhost:<%= ports.test %>'
  },
  dist: {
    path: 'http://localhost:<%= ports.dist %>'
  }
};