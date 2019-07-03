### webpack配置文件

### webpack 默认 查找 根目录下的 index.js
当想要配置 webpack时
webpack 默认配置文件名为 webpack.config.js

在 package.json scripts里 定义 命令

指定配置文件
webpack-cli的作用，使我们可以在命令行里使用命令打包 (webpack ./src/index.js --config webpack.config.js )
"webpack --config webpack.config.js"  

作业
https://webpack.js.org/guides/getting-started/ 
GettingStarted