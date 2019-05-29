const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('./webpack.config');
// webpack 编译器  
// 引入了 webpack库， 引入了 config 配置文件
//webpack结合配置文件 执行编译， 打包代码
const complier = webpack(config);
const app = express();
app.use(webpackDevMiddleWare(complier, {
    publicPath: config.output.publicPath
}))
app.listen(3000, () => {
    console.log('server is running')
})