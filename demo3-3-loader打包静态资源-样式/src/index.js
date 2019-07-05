// loader 打包静态资源

/* 
css-loader会分析出 几个css文件之间的关系， 并合并成一段 css
style-loader 会将 css-loader 分析出的内容挂载到 head标签里
node-sass sass-loader使项目支持 sass
loader的执行顺序，从下到上， 从右到左

postcss-loader 创建一个 postcss.config.js 在里面配置 autoprefixer [install --save-dev]，从而在样式里加上 css3 兼容格式

css打包模块化: css只在这个模块里 有效，避免和其他模块起冲突
*/
 
import './index.scss';
var avartar = require('./1.jpg');

var img = new Image();
img.src = avartar;
img.classList.add('avartar'); 
var root = document.getElementById('root');
root.append(img);
// new createAvartar();

