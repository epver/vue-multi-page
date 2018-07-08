首先 使用vue脚手架开发多页应用是比较特别的需求，无奈有需求就要有解决的方案办法，之前写过用vue-cli2.x改造生产多页应用的方法，现在想想应该升级换代了。

本想自己配置一个多页的开发配置给大家参考使用，看完源码后发现@vue/cli#3.x已经自带了多页配置了。而且配置简单方便包你一学就会。
![@vue/cli#3.x 源码](https://upload-images.jianshu.io/upload_images/1012159-5197176b376dad6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 下面开始升级改造配置

## 安装使用 @vue/cli#3.x 版本的脚手架
```bash
npm install -g @vue/cli
# ......等待
vue create <project-name>
# 或者你也可以使用我已经配置好的 
init https://github.com/advsets/vue-multi-page.git <project-name>
# ......基础选项配置，等待安装包内容
```
## 配置 vue.config.js
首先安装 glob 包, [学习glob](https://www.cnblogs.com/liulangmao/p/4552339.html)
```bash
npm install --save-dev glob
```
@vue/cli#3.x [文档](https://cli.vuejs.org/)
配置 vue.config.js
```javascript
const fs = require('fs')
const glob = require("glob")

// 简单学习 glob https://www.cnblogs.com/liulangmao/p/4552339.html
const pages = {}
let entries
try {
  // 获取相关入口
  entries = glob('src/pages/*/main.js', {sync: true})
} catch (err) {
  entries = []
  throw err
}
// 格式化生成入口
entries.forEach((file) => {
  const fileSplit = file.split('/')
  const pageName = fileSplit[2]
  let pageHtml = fileSplit.slice(0, 3).join('/') + '/index.html'
  if (!fs.existsSync(pageHtml)) {
    // 入口如果不配置直接使用 _default.html
    pageHtml = fileSplit.slice(0, 2).join('/') + '/_default.html'
  }
  pages[pageName] = {
    entry: file,
    template: pageHtml,
    filename: `${pageName}.html`
  }
})

module.exports = {
  pages,
  ... // ... 其他配置
}
```
相关目录形式
![目录形式](https://upload-images.jianshu.io/upload_images/1012159-5cc191a7e7fa6f5a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

编译后得到目录
![编译后](https://upload-images.jianshu.io/upload_images/1012159-415070e78ad2b540.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 多页配置注意事项
- 每个多页入口单独使用 router，store 等 牢记
- 公共组件不应涉及业务操作，如router-link，store 操作等
- 页面访问 http[s]://localhost/[pages].html （如果有index模块服务器会自动定位index.html）
- 每个单页其实就是一个独立的模块，你可以视作每个单页都是一个vue项目，只是使用了公共的 components

## 本文相关
- [vue-multi-page](https://github.com/advsets/vue-multi-page.git)
- [vue-cli#2.0 配置](https://www.jianshu.com/p/be57e081c0f3)
