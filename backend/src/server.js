const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // (yarn add cors) Permite que a api seja acessada por qualquer endereço

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {

}

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

// Metodos Principais: GET, POST, PUT, DELETE
mongoose.connect('mongodb+srv://omnistack:daniel1812@cluster0-f7unl.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

// M - Model, V - View, C - Controller