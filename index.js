var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var socket = require('socket.io');
var cors = require('cors');
app.use(cors({origin: "medievalrule.herokuapp.com"}))
// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');    
//   });

// App setup
http.listen(process.env.PORT || 2020, function(){
    console.log('Server is listening to requests on port 2020')
  });

// Static files
app.use(express.static('./Chat/public'));

// Socket setup
var io = socket(http);
players = {};

io.on('connection', function(socket) {
  console.log('made socket connection', socket.id);
    players[socket.id] = {
        name: "test",
        role: "reara"
    };
    console.log(players)
//Handle chat event
  socket.on('chat', function(data){
     io.sockets.emit('chat', data);
    // io.broadcast.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });
});
