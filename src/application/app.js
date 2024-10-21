const express = require('express');
const path = require('path');
var fs = require('fs');
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));

// REST endpoint example
app.get('/api/test', function (req, res) {
    res.json({ message: 'The REST endpoint test is running!' });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/src/index.js'));
});

// Start the server
app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port);
});
