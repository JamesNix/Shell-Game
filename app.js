var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = process.env.PORT || 3000;

var app = connect()
  .use(connect.logger(':remote-addr -> :method :url [:status]'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening on port: ' + port + ', Directory: ' + directory);
});

