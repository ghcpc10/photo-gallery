var express = require('express'),
    router = express.Router();




module.exports = function() {
  router.get('/', _redirectToHomePage);
  router.get('/home', _serverSideRender);
  router.get('/upload', _serverSideRender);

  return router;
};




function _redirectToHomePage(req, res) {
  res.redirect('/home');
}

function _serverSideRender(req, res) {
  res.sendfile('server/views/index.html');
}
