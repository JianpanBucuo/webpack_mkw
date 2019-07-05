### 
配置 css-loader  配置项
  options 
  当我们在 scss里引入了额外的scss文件
  
css 模块化

options => modules： true 
   css 模块化打包，一个文件里的 css文件不会在 另外文件里生效 不会和另外文件里的css冲突
   import style from './index.css';
   ele.classList.add(style.avatar);

www.iconfont.cn

file-loader 打包 字体文件

###作业

assets management
style-loader
css-loader
file-loader