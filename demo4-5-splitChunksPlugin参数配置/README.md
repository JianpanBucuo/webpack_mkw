### splitChunksPlugins 详解

@babel/plugin-syntax-dynamic-import 官方 babel 插件
magic comment魔法注释， 将打包出的 chunks 编写名称

import(/* webpackChunkName: "lodash" */ 'lodash') 以这样的方式引入依赖包，会将打包出的chunks 重命名

cacheGroups: {
    vendors: false,
    default: false //这样会使打包生成的文件名字不加上 vendors
}

###对同步代码进行代码分割
splitChunks里配置
chunks: "all",
minSize: 30000, //当引入的模块大于30000字节时（30kb）才会做代码分割
maxSize:50000, //尝试对于大于50kb的代码进行二次拆分 一般不配置
minChunks: 2, //当模块代码 被引用次数 大于 1 的时候 才会进行代码分割
priority: -10 //是走 vendors 还是 default
cacheGroups: {
    vendors:  {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        filename:'vendors.js'
        },
},
如果对同步代码进行代码分割，配置会进到 cacheGroups里，读取配置

如果想对 非node_modules里的代码进行代码分割， 首先要代码块要大于 minSize 然后要配置
default:  {
    minChunks: 2,
    priority: -20,
    reuseExistingChunk: true,  //如果一个模块已经打包过了， 默认使用已经使用的模块
    filename:'js/common.js'
}
