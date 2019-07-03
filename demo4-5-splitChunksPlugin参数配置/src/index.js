//  splitChunkPlugin
//          
  
/* 
 
 */
// import '@babel/polyfill';
 
// import  _ from 'lodash';
 
 
var ele = document.createElement('div');
ele.innerHTML ='11111';
document.body.appendChild(ele);

function getComponent () {
      return import(/*webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
            var div = document.createElement('div');
            div.innerHTML = _.join(['a','v','c']);
            return div;
      })
}
ele.onclick= function () {
      getComponent().then(ele => {
            document.body.appendChild(ele);
      })
}

