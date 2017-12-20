//connection making
var socket = io.connect('http://localhost:8000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function() {
  socket.emit('press', {
    handle: handle.value
  });
});



//listen for events
socket.on('chat', function(data) {
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ' : </strong>' + data.message + '</p>';
});

socket.on('press', function(data) {
  feedback.innerHTML = '<p><em>' + data.handle + ' is typing...</em></p>'
});
