const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/cms/api/', // replace with your endpoint
        { target: 'https://seono.shop' } // replace with your target
    ));
}