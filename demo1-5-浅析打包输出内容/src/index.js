//浅析 webpack打包内容

/* 

*/
import Header from './header.js';
var a = document.getElementById('root');
a.onclick = function () {
    import('./header').then((

        ) => {
            new Header();
        
        })
}

