// 同步模块引入
import _ from 'lodash';
import $ from 'jquery';
import a from './a';
console.log(a);
console.log($(body));
var div = document.createElement('div');
div.innerHTML = _.join(['a','v','c']);
document.body.appendChild(div);


// 异步模块引入
function getComponent () {
      return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _}) => {
            //异步加载lodash
            var div = document.createElement('div');
            div.innerHTML = _.join(['a','v','c']);
            // document.body.appendChild(div);  
            return div;          
      })
  }
getComponent().then((ele) => {
      document.body.appendChild(ele);
});