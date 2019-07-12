### webpack dev server 

自动打包 三种做法

1.watch 监听模式

webpack --watch
会监听文件的变化 并自动打包 (不会自动刷新)

如果要自动刷新要借助 webpack-dev-server
2.webpack-dev-server  
安装 npm install webpack-dev-server  --save-dev
 
在 webpack.config.js里配置
    devServer:{
        contentBase:'./bundle',  //映射的根路径
        open: true, //自动打开浏览器，并访问该地址
        proxy: {
            "/api": "http://localhost:3000"
          }
    },
    优点：

1.当 dev-server感知到文件变化时，会自动打包并帮我们刷新页面
2.可以从本地服务器发送请求
3.proxy 接口代理