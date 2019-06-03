# 下载/替换失效图片外链

> 搜索目标文件夹中的markdown文件，找到目标图片，提供下载图片，替换图片链接的功能-通常用于markdown 图片失效。

### 简介

这是一个极为轻量的脚本，引用包，设置好参数，通过API即可轻松上手。

### 安装:

```js
npm i markdown-img-down-site-change
```

### 文档：

[API](https://github.com/OBKoro1/markdown-img-down-site-change/wiki/API)

[更新日志](https://github.com/OBKoro1/markdown-img-down-site-change/wiki/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)

### 使用：

在项目中有一个使用[栗子](https://github.com/OBKoro1/markdown-img-down-site-change/blob/master/example.js)如下：

```js
// example.js
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
```