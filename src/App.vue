<!--
 * @FilePath: \socket-service\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-13 10:03:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 14:50:53
 * @Description: 
-->
<script setup>
import {
    onBeforeUnmount,
    onMounted,
    ref
} from "vue";

const inputValue = ref("");
const message = ref("");
function sendMessage() {
    inputValue.value = "";
}
onMounted(() => { });
onBeforeUnmount(() => { });
</script>

<template>
    <input type="text" v-model="inputValue">
    <h1>回复：{{ message }}</h1>
    <button @click="sendMessage">发送</button>
</template>

<style scoped>
</style>
