const express = require('express');
const routes = require('./routes');

const server = express();
// Metodos Principais: GET, POST, PUT, DELETE

server.use(routes);

server.listen(3333);