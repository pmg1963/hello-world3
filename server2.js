//var http = require('http');
//var path = require('path');
//var port = 3002;

//var io = require('socket.io')(http);

//io.sockets.on('connection', function (socket) {
//    console.log('socket connected');

//    socket.on('disconnect', function () {
//        console.log('socket disconnected');
//    });

//    socket.emit('text', 'wow. such event. very real time.');
//    socket.on('chat message', function (msg) {
//        //io.emit('chat message', msg);
//        console.log('message: ' + msg);
//    });
//});
////create a server object:
//http.createServer(function (req, res) {
//    //res.write('Hello World!'); //write a response to the client
//    //res.end(); //end the response
//    res.sendFile(path.join(__dirname + '/websocket.html'));
//}).listen(port); //the server object listens on port 8080

//var app = require('express')();
//var http = require('http').createServer(app);
//var io = require('socket.io')(http);

//var path = require('path');
//var port = 3002;
//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + '/websocket.html'));
//});

//io.on('connection', function (socket) {
//    console.log('a user connected');
//});

//http.listen(port, function () {
//    console.log('listening on ' + port);
//});
//const express = require('express');
////let httpServer = server.listen(PORT, () => console.log(`Listening on ${PORT}`));
////const app = express();
////const PORT = process.env.PORT || 3002;
////app.use(express.static(path.join(__dirname, 'lib')));
////app.use('/assets', express.static(path.join(__dirname, 'assets')));

////let server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

////const wss = new SocketServer({ server });

//const app = express();
//const PORT = process.env.PORT || 3002;
////app.use(express.static(path.join(__dirname, 'lib')));
////app.use('/assets', express.static(path.join(__dirname, 'assets')));

//let server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

//const wss = new SocketServer({ server });

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3002 })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    })
    ws.send('ho!')
})