const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://upmenu.sepandpay.ir',
            changeOrigin: true,
        })
    );
};