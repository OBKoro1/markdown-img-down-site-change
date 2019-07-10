### [V1.3.0] 2019/7/9

* 新增选项：[downFileNameCallBack](https://github.com/OBKoro1/markdown-img-down-site-change/wiki/API#downfilenamecallback-%E5%A4%84%E7%90%86%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87%E7%9A%84name)。
* 下载的图片名变动：
    * 之前下载的图片名字和修改`markdown`链接是将后面部分全都切出来，比如`https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317`,图片名字是：`1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317`
    * github上无法显示待参数的图片：`https://github.com/*/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317`
    * 现在默认后面的全都不要，正则匹配是：`/^(\w+)/`(取图片名前部分的字母或数字或下划线或汉字),比如该例子下载的图片名为：`1631b6f52f7e7015`
    * 当然下载的图片名变了，修改图片链接时：markdown中的链接也会一起变化的。
    * 如果跟你的需求不符合，也可以使用上面的新增选项`downFileNameCallBack`来自行处理图片名字。

### [V1.1.0] 2019/6/3

* 完善[wiki](https://github.com/OBKoro1/markdown-img-down-site-change/wiki)文档
* 提供下载失效图片的功能
* 提供替换失效图片链接的功能
