var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

//on estadoActual
socket.on('estadoActual', (res) => {
    label.text(res.actual);
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        console.log(label);
        label.text(siguienteTicket);
    });
});