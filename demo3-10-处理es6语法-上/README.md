### 处理 es6语法
结合webpack 和babel
<!-- https://babeljs.io/ -->

babel-loader  帮助 webpack做打包
@babel/core   babel核心库， 使babel识别 js代码里的内容 将js代码转换成 ast抽象语法树，并将ast语法树编译成新的代码出来

npm install babel-loader @babel-core

@babel/preset-env 
babel-loader 只是 webpack 和 babel做通信的桥梁，并不会转换 src里面的源码,
@babel/preset-env  里面有将 es6转换成es5的规则

现在还不够， promise 和 map 方法并没有转换,现在只进行了语法的转换，但函数和变量还没有进行转换

@babel/polyfill  是语法垫片 在 入口文件引入 polyfill 将补全低版本浏览器没有的变量和语法
打包后的文件会很大。
@babel/preset-env  提供了一个参数 useBuiltIns:'usage' 将 自动识别 源码中使用的es6新语法，并只将添加新语法的语法垫片，将有效减少打包后代码的体积。