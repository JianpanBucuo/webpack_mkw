//    webpack 与 浏览器缓存 catching
  
/* 
    如果在生产环境，在更改业务代码后，打包出来的源代码名字相同，上传服务器后，
    用户访问的 js文件还会是之前的文件， 这样会造成更新错误。
    所以要在 后面加一个 hash值， 使业务代码更新后让用户引用更改后的 js文件

    在老版本 webpack中

    runtimeChunk:{
            name: 'runtime'  //  业务逻辑 和 库 关联的代码 抽离到 rutime.js 里， 这样 
        }
 */
 
 
 import _ from 'lodash';
 import $ from 'jquery';

 const dom = $('div');
 dom.html(_.join(['deil','l11i']));
 $('body').append(dom);
 import './style.css';

//  function getComponent () {
//       return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
//             var div = document.createElement('div');
//             div.innerHTML = _.join(['a','v','c']);
//             return div;
//       })
// }
 
// document.addEventListener('click', () => {
//       var div = document.createElement('div');
//       div.innerHTML = 'Jian';
//       document.body.append(getComponent());

// })
