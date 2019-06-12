//  打包分析
//  preloading
//  prefetching
  
/* 
https://github.com/webpack/analyse
 
 */
// import '@babel/polyfill';
 
 
 
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
      document.body.append(div);
//     getComponent().then(ele => {
//         document.body.appendChild(ele);
//   })
})
function clickEvent () {
      
}