var express = require('express');
var app = express();
var port = 5000;
var path = require('path');

app.use(express.static('public'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
    console.log('listening on port: ', port);
});