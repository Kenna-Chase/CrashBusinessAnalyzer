const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// REST endpoint example
app.get('/api/test', function (req, res) {
    res.json({ message: 'The REST endpoint test is running!' });
});

// For any other route, send the React app's index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port);
});
