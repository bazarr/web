'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 9000;
const http = require('http');
const socket = require(`${__dirname}/routes/socket.js`);

const server = http.createServer(app);
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);


app.use('/public', express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('pages/front_page');
});

app.get('/search', (req,res) => {
  res.render('pages/search_results');
});

app.get('/chat', (req,res) => {
  res.render('pages/chat_page');
});

server.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});

module.exports = app;
