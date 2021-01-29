tree shaking 只引入需要的代码
tree shaking 只支持 静态引入 es 模块的引用 (import export)  
不支持 动态引入

配置
optimization:{
usedExports: true
}　　
babel-polyfill 是在 全局引入一些变量方法
"sideEffect": "false", //没有不需要做 tree-shaking 的代码，
"sdieEffect":
"sideEffect": ["*.css"] 遇到 css 文件 不需要进行 tree-shaking

es 静态引入
commonjs 动态引入

```js
//package.json
{
  "sideEffects": ['@babel/polly-fill']
  "sideEffect": "false", //没有不需要做 tree-shaking 的代码,对所有的代码进行tree-shaking
}
// 这样就不会对babel / polly - fill进行摇晃
```

development 模式下，不会去除 没用的代码
production 模式下，会真正去除没用的代码

production 不用写
optimization:{
usedExports: true
}
但是要写 sideEffects
