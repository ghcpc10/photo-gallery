var express = require('express'),
    router = express.Router();
    config = require('../config/config');



module.exports = function() {
  // basic static
  router.use(express.static( config.path.dist ));
  router.use('/dist/', express.static( config.path.dist ));
  router.use('/client/', express.static( config.path.client+'/src' ));
  router.use('/test/', express.static( config.path.client+'/test' ));

  // more static
  router.use('/node_modules/', express.static( config.path.root+'/node_modules' ));
  router.use('/app/', express.static( config.path.client+'/src/app' ));
  router.use('/components/', express.static( config.path.client+'/src/components' ));


  return router;
};
