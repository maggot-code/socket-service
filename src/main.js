/*
 * @FilePath: \socket-service\src\main.js
 * @Author: maggot-code
 * @Date: 2022-07-13 09:58:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 10:03:57
 * @Description:
 */
import { createApp } from 'vue';

import App from './App.vue';

import 'normalize.css';

async function main() {
    const app = createApp(App);

    app.mount('#app');
}

void main();
