/*
 * @FilePath: \socket-service\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-13 10:08:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 14:44:43
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
            //     target: 'http://10.1.1.217:9099',
            //     changeOrigin: true,
            //     ws: true,
            //     rewrite: (path) => path.replace(/^\/shiro/, ''),
            // },
        },
    },
});
