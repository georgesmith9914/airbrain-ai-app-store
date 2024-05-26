const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
console.log('setupProxy.js is running');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost',
      changeOrigin: true,
    })
  );
};