### 如何编写一个loader

#### 编写loader
创建一个loader文件

replace.loader.js
```js
// 不能使用 箭头函数，会改变 this 指向
module.exports = function(source) {
    // source： 文件里的内容
    // this.query 可获取 webpack.config.js里 options里配置的属性
    return source.replace('Dell', this.query.name || 'Nic');
    // 两种方式都可以返回内容
    // const result = source.replace('Dell', this.query.name || 'Nic');
    // this.callback(
    //     null,result
    // )
}
```

webpack.config.js

```js
    module:{
        rules:[
            {
                test:/\.js/,
                use:[{
                    loader: path.resolve(__dirname,'./loaders/replace.loader.js'),
                    options:{
                        name:'Dell'
                    }
                }]
            }
        ]
    }

```
配置后所有 js文件会经过 replace.loader.js进行编译

#### 推荐使用 loader-utils 获取 options里的内容
```js
// replace.loader.js
const loaderUtils = require('loader-utils')
module.exports = function(source) {
     
    const options = loaderUtils.getOptions(this)
    const result = source.replace('Dell', options.name || 'Nic')
    this.callback(
        null,result
    )
}
```