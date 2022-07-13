/*
 * @FilePath: \socket-service\server\app.express.js
 * @Author: maggot-code
 * @Date: 2022-07-13 10:11:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 17:28:34
 * @Description:
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: true });
const port = process.env.PORT || 8000;

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (msg) => {
        console.log(msg);
    });
});

http.listen(port, () => {
    console.log(`listening on *:${port}`);
});
