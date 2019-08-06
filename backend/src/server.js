const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
// Metodos Principais: GET, POST, PUT, DELETE
mongoose.connect('mongodb+srv://omnistack:daniel1812@cluster0-f7unl.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);

// M - Model, V - View, C - Controller