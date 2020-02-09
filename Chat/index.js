var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(2020, function(){
    console.log('listening for requests on port 2020,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
var players = {};

io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    players[socket.id] = {
        name: "test",
        role: "reara"
    };

    console.log(players)

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});