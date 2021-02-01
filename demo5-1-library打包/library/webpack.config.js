const path = require('path')
module.exports ={
    mode:'production',
    entry: './src/index.js',
    output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'library.js',
    libraryTarget:'umd', //可以以 commonjs， es6， 的方式引入
    library:'library', //以src的方式引入，并使用全局变量的方式引用
    // externals:['lodash'] //当业务代码中
 }
 
}