const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    // entry:'./src/index.js',
    mode: 'development', // production
    entry:{
        main: './src/index.js'
    },
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    // 模块
    module:{
        // 规则
        rules:[
            {
                test: /\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // placeholder
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 5000
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use:{
                    loader: 'file-loader',
                    options:{
                        outputPath:'fonts/'
                    }
                    
                }
            },
            {
                // 如果想配置loader的配置项， 则用对象代替字符串
                test: /\.(css|scss)$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        importLoaders:2, //保证 在js里面 引入的scss 和 css文件里引入的 scss文件 都会走 sass-loader postcss-loader
                        //  modules: true //开启css模块化打包
                    }
                },'sass-loader',"postcss-loader"] //加 css3 前缀
            }

        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html' //模板文件
        }),
        new cleanWebpackPlugin()　　
    ]　　　　　　　
 }