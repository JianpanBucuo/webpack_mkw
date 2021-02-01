### Code splitting 代码分割 (本质上和 webpack 没关系)

webpack 插件非常容易的帮助我们进行代码拆分

####第一种方式
将依赖包 和 源代码 打包到 main.js

####第二种方式 (手动动手进行代码分割)
通过将定义多个入口，将依赖包的内容和源代码打包到不同不同文件 （浏览器可以并行加载文件）

####第三种方式 (通过 webpack 自动进行代码分割)
在配置文件里添加

````js
optimization:{

        splitChunks:{
            'chunks': 'all'  //当使用到类库的时候 自动帮助你实现 code splitting
        }
    }　　　　　
    ```
    之后打包， webpack会自动的帮你进行代码分割

####第四种方式 异步加载 (动态引入依赖包)

如何使用 import()
安装@babel/plugin-syntax-dynamic-import
配置 babelrc

### 总结

代码分割和 webpack 无关

1. 同步进行代码分割 (需在 optimization splitChunks 进行配置) chunks: all
2. 异步进行代码分割 (webpack 的内置插件会自动将异步代码进行代码分割)
````
