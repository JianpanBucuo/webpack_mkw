// import './style.css';
import Counter from './counter';
import NumberE from './number';
var btn = document.createElement('button');
btn.innerHTML = 'New';
document.body.appendChild(btn);


btn.onclick = function () {
    var div = document.createElement('div');
    div.innerHTML = 'item1';
    document.body.appendChild(div);
    Counter();
    NumberE();

}

if(module.hot) {
    // 如果开启了热模块更新
    module.hot.accept('./number',() => {
        document.removeChild(document.getElementById('number'));
        
        NumberE();
    })
}