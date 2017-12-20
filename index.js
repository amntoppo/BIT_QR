var express  = require('express');
var app = express();
var socket = require('socket.io');

//setting up server
var server = app.listen(8000, function() {

});

app.use(express.static('public'));

//setting up socket.io
var io = socket(server);

io.on('connection', function(socket) {
//  console.log('make socket', socket.id);

    socket.on('chat', function(data) {
      io.sockets.emit('chat', data);
      console.log(data.message);
    });
});
