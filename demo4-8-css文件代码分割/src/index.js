//   打包css
  
/* 
miniCssExtractPlugin
  可将 css 提取到单独的 css文件中
       默认分块打包 （根据 入口文件引入的css，打包不同的css）
       可在 optimization  -> splitChunks -> cacheGroups 里配置， 将css文件打包到一起 还是 根据入口 打包到不同css文件
 optimize-css-assets-webpack-plugin 压缩
 将 css文件压缩
 */
 
 
 
 import './style.css';

 function getComponent () {
      return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
            var div = document.createElement('div');
            div.innerHTML = _.join(['a','v','c']);
            return div;
      })
}
 
document.addEventListener('click', () => {
      var div = document.createElement('div');
      div.innerHTML = 'Jian';
      document.body.append(getComponent());

})
