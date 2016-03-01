var express = require('express');

var app = express();

// routes
app.use( require('./server/routes/static')() );
app.use( require('./server/routes/routes')() );


var port = process.env.PORT || 3032;
app.listen(port, function() {
  console.log('listen to ===> http://localhost:' + port);
});