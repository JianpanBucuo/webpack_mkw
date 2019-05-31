//  区分 produciton模式 和 development模式 区分打包
  
/* 
    线上代码打包 和 开发环境打包配置是不同的
    pro：代码的压缩 / sourcemap 精简
    dev：devServer

    
   拆分代码。 提取公共模块， 合并
   webpack-merge 
      npm install webpack-merge --save-dev

   
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
add(1,5);