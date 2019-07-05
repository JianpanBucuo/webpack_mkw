// loader 打包静态资源

/* 
css-loader 
    importLoaders 2 保证 在js里面 引入的scss 和 css文件里引入的 scss文件 都会走 sass-loader postcss-loader
    CSS-module

*/

import  './index.css';
// import style from './index.css';
var avartar = require('./1.jpg');
import createAvartar from './createAvartar';

var img = new Image();
img.src = avartar;
// img.classList.add(style.avartar); 
img.classList.add( 'avartar'); 
var root = document.getElementById('root');
root.append(img);

 
root.innerHTML = '<div class="iconbianji iconfont">112345666</div>'

createAvartar();