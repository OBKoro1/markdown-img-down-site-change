/*
 * @Github: https://github.com/OBKoro1/markdown-img-down-site-change
 * @Author: OBKoro1
 * @Created_time: 2019-05-31 16:05:19
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-06-03 11:09:33
 * @Description: 查找指定文件夹的所有markdown文件。
 * 根据参数找出要所有要替换的图片，下载所有图片，替换图片的地址。
 */
// npm i markdown-img-down-site-change -S 
const markdownImageDown = require('markdown-img-down-site-change'); // 文件模块

// 传参： 这也是脚本的默认参数，根据情况可以自行修改
let option = {
    replace_image_url: 'http://ww1.sinaimg.cn/large/', // 要被替换的图片
    read_markdown_src: './source', // 要查找markdown文件的文件夹地址
    down_img_src: './markdown_img_src', // 下载图片到这个文件夹
    filter_item: ['.git'], // 过滤某些文件夹 不去查找markdown
}

// 初始化
const markdownImage = new markdownImageDown(option)

// 下载外链
markdownImage.begin('down');

// 上传下载下来的图片文件夹到云端 用户自己操作

// 上传图片之后 
// 脚本会把以前的外链替换成云端地址+拼接一个图片名
markdownImage.updateOption({
    new_image_url: 'https://xxx.com/目录地址/', // 图片上传的地址
    add_end: '?raw=true' // github图片地址有后缀 直接进去是仓库
})

// 替换外链 
// 把replace_image_url的字符串换成new_image_url字符串
markdownImage.begin('replace');