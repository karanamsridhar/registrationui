const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/registration", {
      target:
        "http://registration-bg-alb-537980081.us-east-1.elb.amazonaws.com/"
    })
  );
};
