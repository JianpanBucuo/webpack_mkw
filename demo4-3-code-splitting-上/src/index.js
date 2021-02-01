//  代码分割
  
/* 
 正常打包的话 打包文件会很大 
    （第三方库正常不会改动，业务逻辑改动）

      解决方法： 新建 lodash.js 引入 lodash
Code splitting
      分块打包的话 用户在浏览器里，是有 lodash的缓存的。
      首次访问页面 1MB 1MB
      当业务逻辑发生变化后再次访问时  只需再次加载 1MB
Split Chunks Plugin
 */
// import '@babel/polyfill';

console.log(_.join(['a','v','c']));
console.log($('body').addClass('add-body'));
function a () {
    return 
}