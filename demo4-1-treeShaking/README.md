

tree shaking 之引入需要的代码
tree shaking只支持 静态引入 es模块的引用  (import export)  
不支持 动态引入 

配置
    optimization:{
        usedExports: true
    }　　
babel-polyfill是在 全局引入一些变量方法
    "sideEffect": "false", //没有不需要做 tree-shaking 的代码
    "sdieEffect": 
    "sideEffect": ["*.css"]  遇到 css文件 不需要进行 tree-shaking