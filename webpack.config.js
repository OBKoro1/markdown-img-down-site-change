/*
 * @Github: https://github.com/OBKoro1
 * @Author: OBKoro1
 * @Date: 2019-07-09 20:35:45
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-07-11 20:55:41
 * @Description: webpack 打包配置
 */
const path = require('path');

module.exports = {
    target: 'node', // 声明环境解决：window is not defined
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        globalObject: 'this', // 添加这个选项
        libraryTarget: 'umd'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
