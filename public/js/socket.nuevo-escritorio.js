var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var label = $('small');
var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
    socket.emit('atenderTicket', {
        escritorio
    }, function (resp) {
        if (resp === 'No hay tickets') {
            label.text(resp.numero);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero)
        console.log(resp);
    })
});