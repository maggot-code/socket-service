/*
 * @FilePath: \socket-service\src\entity\Service.js
 * @Author: maggot-code
 * @Date: 2022-07-13 17:47:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 17:57:10
 * @Description:
 */
export const serviceURI = window.location.origin;

export const servicePath = '/socket.io/';

export const serviceRetry = 5;

export const setupQuery = () => {
    return {};
};

export const Service = {
    url: serviceURI,
    path: servicePath,
    reconnectionAttempts: serviceRetry,
    query: setupQuery(),
    reconnectionDelay: 1024,
    timeout: 20000,
    autoConnect: true,
    transports: ['websocket'],
};

export default Service;
