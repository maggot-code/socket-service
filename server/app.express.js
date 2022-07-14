/*
 * @FilePath: \socket-service\server\app.express.js
 * @Author: maggot-code
 * @Date: 2022-07-13 10:11:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-14 14:04:18
 * @Description:
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: true });
const port = process.env.PORT || 8000;

const clients = new Map();

io.on('connection', (socket) => {
    console.log('a user connected');
    clients.set(socket.id, socket);

    socket.on('message', (msg) => {
        console.log(msg);
    });
});

let index = 0;

const typeList = ['rain', 'prediction', 'reservoir'];

setInterval(() => {
    index++;
    const rand = Math.floor(Math.random() * typeList.length);
    clients.forEach((socket) => {
        socket.emit('message', {
            index,
            type: typeList[rand],
        });
    });
}, 3000);

setInterval(() => {
    clients.forEach((socket, id) => {
        socket.disconnect(true);
        clients['delete'](id);
    });
    console.log(clients.size);
}, 12000);

http.listen(port, () => {
    console.log(`listening on *:${port}`);
});
