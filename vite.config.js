/*
 * @FilePath: \socket-service\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-13 10:08:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 10:10:15
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    clearScreen: false,
    plugins: [vue()],
});
