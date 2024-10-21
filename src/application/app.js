const express = require('express');
const path = require('path');
var fs = require('fs');
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

// REST endpoint example
app.get('/api/test', function (req, res) {
    res.json({ message: 'The REST endpoint test is running!' });
});

app.get('/', function (req, res) {
   console.log('At Home Page');
});

// For any other route, send the React app's index.html
app.get('*', function (req, res) {
    res.json({ message: 'This is not the page you are looking for!' });
});

// Start the server
app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port);
});
