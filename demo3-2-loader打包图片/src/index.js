// loader 是什么

/* 
 1.webpack 是什么？
 2. 模块是什么?
 3. webpack 配置文件是什么？

 Loader打包图片

  1.图片名字不变

  file-loader：将图片打包
  url-loader:转换 base64

  阅读 file-loader url-loader

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
