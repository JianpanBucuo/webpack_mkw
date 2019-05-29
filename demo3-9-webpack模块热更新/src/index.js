// HMR 热模块替换
  
/*
 webpack-dev-server 对 src目录下文件进行打包， 并放到内存中， 提升打包速度
 
 改变样式代码时，之前渲染的页面不要动，只更新改变部分

 HMR 配置
        hot: true,
        hotOnly: true
        new webpack.HotModuleReplacementPlugin()　　
        方便调试 css
*/
import './style.css';
console.log('source Map 111111112')
import Counter from './counter';

var button = document.createElement('button');
button.innerHTML = '新增'
button.onclick = function() {
    var div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}
document.body.appendChild(button);
Counter();