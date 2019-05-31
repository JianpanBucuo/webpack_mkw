// tree shaking
  
/* 
//  如果在 presets 加上   "useBuiltIns":"usage" 可以 不去引入 '@babel/polyfill';
    require 和 import 的区别 ？
---------------
   我引入的什么， 打包什么，要把没用的代码摇晃掉
   去除掉 不使用的代码

   1. treeshaking只支持 es方法的引入 (import export 静态引入)
   2.配置项
     webpack.config.js
        optimization:{
            usedExports: true
        }　
     package.json
        "sideEffects": "false"
        @babel-polyfill 实际上并没有导出内容， 是在 window对象绑定了全局变量
        用了 treeshaking后 判断 babel-polyfill 没有导出内容，直接就把 babel-polyfill忽略掉了导致打包出错
        如果不希望对 babel-polyfill进行 treesaking
          要配置 "sideEffects": "['@babel-polyfill','*.css']",   

   
      
   
*/
// import '@babel/polyfill';
import {add} from './math';
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map((value) => {
    console.log(value)
})
add(1,2);