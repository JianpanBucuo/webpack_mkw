// tree shaking
  
/* 
   去除掉 不使用的代码
   只打包引入的代码，去除到
   treeshaking只支持 es方法的引入 (import export 静态引入)
    require 和 import 的区别 ？
   
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