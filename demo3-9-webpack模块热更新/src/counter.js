function Counter () {
    var div = document.createElement('div');
    div.innerHTML = '1';
    div.setAttribute('id','num');
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML,10) + 1;
    }
    document.body.appendChild(div);
}
export default Counter;