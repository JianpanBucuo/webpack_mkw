// ES6 转义
  
/* 
   1    babel-loader  @babel/core
            npm install --save-dev babel-loader es6转义工具 @babel/core  核心库
            在 webpack.config.js 里增加规则
   2    babel-loader 和 core 做了一个桥梁 babel-loader 并不会把项目里的代码转义成 es5

   3    @babel/preset-env
            npm install @babel/preset-env --save-dev
        将项目里的代码转换成 es5
        @babel/polyfill
            npm install --save @babel/polyfill
            babel/polyfill 可以兼容低版本 浏览器 （补充缺少的内容）
            在项目根目录引入 
        
        
        
*/
import '@babel/polyfill';
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map((value) => {
    console.log(value)
})

 