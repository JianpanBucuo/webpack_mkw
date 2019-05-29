// -使用plugins让打包更便捷

/* 
  通过 配置 output 来设置，资源引入地址
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
 

 