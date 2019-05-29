// -使用plugins让打包更便捷

/* 
plugins：在 webpack运行到某个时刻的时候， 帮你做一些事情
  html-webpack-plugin
    1.（时刻）会在打包结束后 自动生成 html文件(模板)， 并把 打包生成的js，自动引入到 html文件中
  clean-webpack-plugin 会在打包流程执行前，删除 bundle 文件夹， 并开始打包
*/

// import style from './index.scss';
import './index.scss'
var avartar = require('./1.png');
var root = document.getElementById('root');
// 插入图片
var img = new Image();
img.src = avartar;

img.classList.add(avartar); 
root.append(img);
 

 