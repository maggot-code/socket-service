<!--
 * @FilePath: \socket-service\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-13 10:03:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 16:00:13
 * @Description: 
-->
<script setup>
import { io } from "socket.io-client";

import {
    onBeforeUnmount,
    onMounted,
    ref
} from "vue";

// const socket = io("http://10.1.1.217:9099", {
//     query: {
//         username: "maggot-code"
//     },
//     transports: ["websocket"]
// });
const socket = io("http://localhost:8000", {
    transports: ["websocket"]
});

const inputValue = ref("");
const message = ref("");
function sendMessage() {
    socket.emit("message", inputValue.value);
    inputValue.value = "";
}

socket.on("message", (msg) => {
    console.log('message', msg);
});

// 连接成功
socket.on("connect", () => {
    console.log("connected");
});

// 连接失败
socket.on("disconnect", (reason) => {
    console.log('disconnected', reason);
});

// 服务异常
socket.on("connect_error", (error) => {
    console.log('connect_error', error);
    socket.disconnect();
});

onMounted(() => {
    socket.connect();
});
onBeforeUnmount(() => {
    socket.disconnect();
});
</script>

<template>
    <input type="text" v-model="inputValue">
    <h1>回复：{{ message }}</h1>
    <button @click="sendMessage">发送</button>
</template>

<style scoped>
</style>
