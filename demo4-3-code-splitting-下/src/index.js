//  代码分割
//         webpack中实现代码分割 两种方式   同步 / 异步
  
/* 
 正常打包的话 打包文件会很大 
    （第三方库正常不会改动，业务逻辑改动）

      解决方法： 新建 lodash.js 引入 lodash
Code splitting
      分块打包的话 用户在浏览器里，是有 lodash的缓存的。
      首次访问页面 1MB 1MB
      当业务逻辑发生变化后再次访问时  只需再次加载 1MB
Split Chunks Plugin
    optimization:{
        splitChunks:{
            'chunks': 'all'  //当使用到类库的时候 自动帮助你实现 code splitting
        }
    }　　　　　　　
@babel/plugin-syntax-dynamic-import 来实现异步
动态 
 */
// import '@babel/polyfill';
 
// import  _ from 'lodash';
function getComponent () {
      return import('lodash').then(({default: _}) => {
            var div = document.createElement('div');
            div.innerHTML = _.join(['a','v','c']);
            return div;
      })
}
getComponent().then(ele => {
      document.body.appendChild(ele);
})
