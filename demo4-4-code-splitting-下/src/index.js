// 同步模块引入
// import _ from 'lodash';

// var div = document.createElement('div');
// div.innerHTML = _.join(['a','v','c']);
// document.body.appendChild(ele);
// import $ from 'jquery'

// console.log($)
//异步模块引入
function getComponent () {
    return import('lodash').then(({ default: _ }) => {
        //异步加载lodash
        var div = document.createElement('div');
        div.innerHTML = _.join(['a', 'v', 'c']);
        // document.body.appendChild(div);  
        return div;
    })
}
// function getComponent () {
//     document.body.appendChild(div);  
//     return div;
// }
var body = document.getElementsByTagName('body')
body[0].addEventListener('onclick',function () {
    getComponent().then((ele) => {
        document.body.appendChild(ele);
    });
})
// $('body').on('click',function(){
   
//     // getComponent()
// })