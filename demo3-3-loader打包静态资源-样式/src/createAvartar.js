import Avatar from './1.jpg';
import style from  './index.scss'

function createAtarvar () {
    var img = new Image();
img.src = Avatar;
img.classList.add('avatar')
console.log(img);

var root = document.getElementById('root');
root.append(img);
}

export default createAtarvar;