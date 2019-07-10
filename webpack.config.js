/*
 * @Github: https://github.com/OBKoro1
 * @Author: OBKoro1
 * @Date: 2019-07-09 20:35:45
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-07-10 20:57:44
 * @Description: webpack 打包配置
 */
const path = require('path');

module.exports = {
    output: {
        globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
