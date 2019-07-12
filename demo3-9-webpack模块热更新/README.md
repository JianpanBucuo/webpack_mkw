###  HMR 热模块替换 

当你改变css后 需要重新刷新页面，
通过热模块替换，可以保证在不刷新页面的情况下，使更改后的 css文件生效


配置

devServer:{
    hot:true  //开启热模块更新
    hotOnly: true // 即便 hmr没生效，浏览器也不自动更新
}
引入插件
plugins:[
    new webpack.HotModuleReplacementPlugin()　
]
//如上 开启了热模块更新

如果想让js也要开启热模块替换
需要在 代码里判断
 if (module.hot) {
     <!-- 是否开启热模块替换 -->
     module.hot.accept('./counter',() => {
         <!-- 监听这个文件的变化 -->
     })
 }
 <!-- vue react 内置了 热模块替换功能 -->

 ###作业

DOCUMENT
guides
HMR replacement
API
HMR replacement

concept
HMR replacement