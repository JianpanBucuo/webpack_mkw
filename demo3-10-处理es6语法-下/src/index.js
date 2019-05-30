// ES6 转义
  
/* 
   1    babel-loader  @babel/core
            npm install --save-dev babel-loader es6转义工具 @babel/core  核心库
            在 webpack.config.js 里增加规则
   2    babel-loader 和 core 做了一个桥梁 babel-loader 并不会把项目里的代码转义成 es5

   3    @babel/preset-env
            npm install @babel/preset-env --save-dev
        将项目里的代码转换成 es5
            webpack.config.js options =>  presets:['@babel/preset-env']
    到这里可以转换es6代码，但为了兼容低版本浏览器还需添加垫片
        @babel/polyfill
            npm install --save @babel/polyfill
            babel/polyfill 可以兼容低版本 浏览器 （补充缺少的内容）
            在项目根目录引入 
        在webpack.config.js里配置时，
                                options => 
             引入所有垫片                presets:['@babel/preset-env']
             引入项目里用到的垫片         presets:[['@babel/preset-env',{
                                            useBuiltIns:'usage'  //不是把所有语法的转义加进来，是根据业务代码里用到了什么，就加什么
                                        }]]
        plugins 不会污染全局环境
    4 @babel/plugin-transform-runtime @babel/runtime
            npm install --save-dev @babel/plugin-transform-runtime @babel/runtime
                options => "plugins": ["@babel/plugin-transform-runtime"]
            npm install --save @babel/runtime-corejs2
    在配置文件时， babel options里的配置项会非常的长，
    所以创建一个 .babelrc 并把options里的内容放到 .babelrc里
*/
import '@babel/polyfill';
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map((value) => {
    console.log(value)
})

 