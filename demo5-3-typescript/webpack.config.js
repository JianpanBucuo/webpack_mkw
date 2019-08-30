const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: "./src/demo7-decorator/index.ts",
    module:{
        rules:[
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude:'/node_modules/'
            }
        ]
    },
    devServer:{
        contentBase:'./dist',
        open: true, //自动打开浏览器，并访问该地址
        proxy: {
            "/api": "http://localhost:3000"
          },
        hot: true
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
        // new cleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()　　
    ]

    
}