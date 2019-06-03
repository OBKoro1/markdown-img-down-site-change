const markdownImageDown = require('markdown-image-upload-change'); // 文件模块

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