### WEBPACK  的核心定义是 模块打包工具

将不同的模块打包到一起 生成一个最终的 文件
会识别任何 模式下的 引入 导出

ES方式模块引入导出  import
commonjs方式引入导出 module.exports


最开始webpack是 js的模块的打包工具，随着webpack的发展，可以打包的模块不仅仅是js文件
可以打包(.vue .css ....等等等)

###作业
https://webpack.js.org/concepts/  
concept modules
API modules


异步引入模块的语法 import() 已被 webpack内置
但如需要 转换成 浏览器可识别的版本 需要使用 @babel/plugin-syntax-dynamic-import 进行转换

小尾巴：
动态打包后的 路径引用不正确
