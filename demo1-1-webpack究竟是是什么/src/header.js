function  Header ()  {
    let a = document.createElement('div');
    a.innerHTML = 'header';
    let root = document.getElementById('root');
    root.append(a);
}

export default Header;