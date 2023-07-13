// import the express module
const express = require('express');

// import the path module
const path = require('path');

// create an instance of the express module
const server = express();

// Serve static files from the root directory
server.use(express.static(path.join(__dirname)));

// Serve assets from the "assets" directory
server.use('/assets', express.static(path.join(__dirname, 'assets')));

// define a route
server.get('/', (request, respond) => {
    respond.sendFile(path.join(__dirname, 'index.html'));
});

// set up the port
port = 2001;
server.listen(port, () => {
    console.log(`http://localhost:${port}`)
});