// devtool 关系到 错误映射关系 和 构建速度

/*
  当js 加载错误时， 通过 配置 sourcemap来定位错误信息
  
  加了 inline 之后，  报错会精确到哪一行 哪一列 将映射关系图直接打包到 输出文件中 

  cheap-line    精确到 行
  module  外部模块错误
  eval  打包速度最快 

  最佳实践
   cheap-module-eval-source-map
*/
console.log('source Map')