'use strict';

// import modules
const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const startServer = () => {
    server.listen(app.get('port'), () => console.log(`Responsive Images App is running on port ${ app.get('port') }.`));
};

startServer();