// devtool 关系到 错误映射关系 和 构建速度

/*
  当js 加载错误时， 通过 配置 sourcemap来定位错误信息 显示源代码 错误位置
  
  加了 inline 之后，  报错会精确到哪一行 哪一列 将映射关系图直接打包到 输出文件中 
   
  none 
  source-map   // 打包速度变慢  多出 js.map（映射关系图）
  inline-source-map // DataUrl的方式 添加到 main.js 底部
  cheap-inline-source-map // 不会精确到列


  inline // 会将生成的 js.map 打包到 目标js文件里
  cheap // 加了 cheap 打包速度会变快 只提示 行错误  不提示列
  module // 提示第三方 模块的错误
  eval  //eval 方式打包 打包速度最快  业务代码和 source-map以eval方式执行，提高打包速度


 

  最佳实践
   cheap-module-eval-source-map
   线上代码
   cheap-module-source-map 
*/
console.log('source Map')
// window.onerror = function (msg, url, lineNo, columnNo, error) {
//   var string = msg.toLowerCase()
//   var substring = 'script error' // 这块下面会讲到
//   if (string.indexOf(substring) == -1) {
//     var message = [
//       'Message: ' + msg,
//       'URL: ' + url,
//       'Line: ' + lineNo,
//       'Column: ' + columnNo,
//       'Error object: ' + JSON.stringify(error)
//     ].join(' - ')
//     console.log(message)
//   }
//   return false
// }
window.onerror = function (message, url, line, column, error) {
  console.log('log---onerror::::',message, url, line, column, error);
}
throw new Error('this is the error happened in b.js');