// HMR 热模块替换
  
/*
 webpack-dev-server 对 src目录下文件进行打包， 并放到内存中， 提升打包速度
 
 改变样式代码时，之前渲染的页面不要动，只更新改变部分

 HMR 配置
     css：
      devServer里添加
            hot: true,
            hotOnly: true   在HMR发生意外，不想让页面自动更新时设置
      plugins里添加
            new webpack.HotModuleReplacementPlugin()　　
            方便调试 css
            （css-loader 帮你编写文件）
     js：
        如果想让js 单文件更新，需要在业务代码里增加 module.hot.accept 方法 35行
    vue/react脚手架 内置了这种功能
*/
import './style.css';
console.log('source Map 111111112')
import Counter from './counter';
import NnmberE from './number';

var button = document.createElement('button');
button.innerHTML = '新增'
button.onclick = function() {
    var div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}
document.body.appendChild(button);
Counter();
NnmberE();

// js模块热更新 
// 只更新 发生改变的js
if(module.hot) {
    module.hot.accept('./number',() => {
        document.body.removeChild(document.getElementById('number'));
        NnmberE();
    });
}