// import Header from './header';

// ES6
// import Header from './header.js';

// Commonjs
// var  Header = require('./header.js');
// new Header();
var a = document.getElementById('root');
//  动态import
    import('./header').then(() => {
        new Header();
    })
 

//作业 
// webpack 官网  concenpts -> Modules 
//               api -> modules   语法 变量