
  
/* 
 通过 import 异步加载模块

 
 */
// import '@babel/polyfill';
 
 
// import _ from  'lodash'; 
 
// var ele = document.createElement('div');
// ele.innerHTML = _.join(['a','b','v']);
// document.body.appendChild(ele);


//  function getComponent () {
//       return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
//             var div = document.createElement('div');
//             div.innerHTML = _.join(['a','v','c']);
//             return div;
//       })
// }
async function getComponent () {
      const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash');
      // return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
            var div = document.createElement('div');
            div.innerHTML = _.join(['a','v','c']);
            return div;
      // })
}
// getComponent().then(ele => {
//       document.body.appendChild(ele);
// })
document.addEventListener('click', () => {
    getComponent().then(ele => {
        document.body.appendChild(ele);
  })
})