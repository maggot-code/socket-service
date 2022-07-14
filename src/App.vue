<!--
 * @FilePath: \socket-service\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-13 10:03:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-14 15:45:55
 * @Description: 
-->
<script setup>
import io from "socket.io-client";
// import { io } from "socket.io-client";
import { useSocketClient } from "./usecase/useSocketClient";

import { ref } from "vue";

const socket = io("ws://10.1.1.245:9098", {
    query: {
        token: "maggot-code"
    },
    transports: ["websocket"]
});

// "http://localhost:8000"
// const { socket, setupSocketMessage } = useSocketClient({ url: "http://localhost:8000" });

// setupSocketMessage("rain", (index) => {
//     console.log(`刷新雨量站 ${index}`);
// });
// setupSocketMessage("prediction", (index) => {
//     console.log(`刷新天气预报 ${index}`);
// });
// setupSocketMessage("reservoir", (index) => {
//     console.log(`刷新水库站 ${index}`);
// });


const inputValue = ref("");
const message = ref("");
function sendMessage() {
    inputValue.value = "";
}
function handlerClose() {
    socket.disconnect();
}
</script>

<template>
    <input type="text" v-model="inputValue">
    <h1>回复：{{ message }}</h1>
    <button @click="sendMessage">发送</button>
    <button @click="handlerClose">断开</button>
</template>

<style scoped>
</style>
