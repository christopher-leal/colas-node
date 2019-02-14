require('./config/config');
const express = require('express');
const app = express();
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app);

//Se habilita la ruta para la carpeta publica
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

//Conexion con la base de datos
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});