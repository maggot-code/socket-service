/*
 * @FilePath: \socket-service\src\shared\status.js
 * @Author: maggot-code
 * @Date: 2022-07-13 17:30:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 17:36:18
 * @Description:
 */
// 断开状态 服务连接异常(未包含的错误状态都转到该状态下)
export const DISCONNECT_SERVER_ERROR = 'server error';

// 断开状态 服务器主动断开
export const DISCONNECT_SERVER_CLOSE = 'io server disconnect';

// 断开状态 客户端主动断开
export const DISCONNECT_CLIENT_CLOSE = 'io client disconnect';

// 断开状态 心跳超时断开
export const DISCONNECT_HEART_TIMEOUT = 'ping timeout';

// 断开状态 失去网络连接
export const DISCONNECT_NETWORK_LOSE = 'transport close';

// 断开状态 服务器丢失连接
export const DISCONNECT_SERVER_LOSE = 'transport error';
