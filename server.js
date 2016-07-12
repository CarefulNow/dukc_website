var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

// Server config
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
        extended: true
})); // support encoded

// Render the static files in the public directory from the root
// As with all web servers, index.html is the default file which will be served.
app.use('/', express.static('public'));

var server = app.listen(8888, function() {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Server listening on %s:%s', host, port);
});