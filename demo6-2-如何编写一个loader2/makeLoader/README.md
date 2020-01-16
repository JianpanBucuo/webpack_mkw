### 编写loader-2 

#### 编写异步loader

在loader文件里定义 async 函数

并在 异步函数里返回 callback() 
```js 
//loader.replace.js
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace('Dell', 'Nic')
         callback(
            null,result
        )
    },1000)
```

#### 编写多个loader

loader的调用是从下到上， 从右到左的

经过第一个loader编译后，经过第二个loader
```js
    module:{
        rules:[
            {
                test:/\.js/,
                use:[{
                        loader: path.resolve(__dirname,'./loaders/replace.loader.js'),
                        options:{
                            name:'2222'
                        }
                    },
                    {
                        loader: path.resolve(__dirname,'./loaders/replace.loaderAsync.js'),
                        options:{
                            name:'1111'
                        }
                    }]
            }
        ]
    }
```

#### resolveLoader

告诉webpack在打包 寻找loader时，先在 node_modules里查找后，在 loaders文件里查找
```js
//webpack.config.js
module.exports = {
    resolveLoader:{
        modules:[
            'node_modules','./loaders/'
        ]
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:[{
                        loader:  'replace.loader',
                        options:{
                            name:'2222'
                        }
                    },
                    {
                        loader: 'replace.loaderAsync',
                        options:{
                            name:'1111'
                        }
                    }]
            }
        ]
    }
}

```