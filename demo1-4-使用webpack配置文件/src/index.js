//使用 webpack 配置文件

/* 
  webpack.config.js

  npx webpack --config webpack.js  告诉webpack 使用哪个配置文件
  
  src：源代码目录

  npm script 简化命令 
  先到工程目录找到 依赖的webpack文件， 再到全局查找 webpack

  webpack-cli 作用： 是我们可以在命令行里正确的使用 webpack命令
  
  命令：
    webpack （全局）
    npx webpack ./src/index.js
    npm run bundle （使用配置文件）
    三种打包命令 本质上都是 运行 webpack 命令 
*/
import Header from './header.js';

new Header();
