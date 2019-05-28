// loader 是什么

/* 
 1.webpack 是什么？
 2. 模块是什么?
 3. webpack 配置文件是什么？

 Loader 是什么？ 
  webpack可以打包 任何文件， 但默认打包的是 js文件， 所以需要在 配置文件中告诉 webpack 打包的是 其他类型的文件
  当打包一个图片时，loader将 图片移动到打包目录中，并将 相对于 打包目录的路径返回给变量当中
*/
import Header from './header.js';
import Avatar from './1.jpg';

var avartar = require('./1.jpg');

console.log(avartar);

new Header();

var img = new Image();
img.src = Avatar;
console.log(img);

var root = document.getElementById('root');
root.append(img);
