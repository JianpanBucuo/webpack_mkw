// 同步模块引入
// import _ from 'lodash';

// var div = document.createElement('div');
// div.innerHTML = _.join(['a','v','c']);
// document.body.appendChild(ele);


//异步模块引入
function getComponent () {
      return import('lodash').then(({ default: _}) => {
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