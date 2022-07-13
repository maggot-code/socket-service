/*
 * @FilePath: \socket-service\src\shared\event.js
 * @Author: maggot-code
 * @Date: 2022-07-13 17:37:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-13 17:43:12
 * @Description:
 */
// 监听事件状态 连接成功
export const SOCKET_WATCH_EVENT_CONNECT = 'connect';

// 监听事件状态 连接失败
export const SOCKET_WATCH_EVENT_DISCONNECT = 'disconnect';

// 监听事件状态 异常断开
export const SOCKET_WATCH_EVENT_ERROR = 'connect_error';

// 监听事件状态 消息推送
export const SOCKET_WATCH_EVENT_MESSAGE = 'message';

// 推送事件状态 消息推送
export const SOCKET_EMIT_EVENT_MESSAGE = 'message';

// 推送事件状态 主动断开
export const SOCKET_EMIT_EVENT_LEAVE = 'leave';
