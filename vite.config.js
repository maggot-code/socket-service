/*
 * @FilePath: \socket-service\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-13 10:08:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 15:01:45
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    clearScreen: false,
    plugins: [vue()],
    server: {
        proxy: {
            // /shiro/tzym
            // '/shiro': {
            //     target: 'ws://10.1.1.217',
            //     changeOrigin: true,
            //     ws: true,
            //     rewrite: (path) => path.replace(/^\/shiro/, ''),
            // },
        },
    },
});
