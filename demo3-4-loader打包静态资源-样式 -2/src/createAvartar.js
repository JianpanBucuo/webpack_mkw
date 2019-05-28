var avartar = require('./1.jpg');
function createAvartar () {
var img = new Image();
img.src = avartar;
img.classList.add('avartar'); 
var root = document.getElementById('root');
root.append(img);
 
}
export default createAvartar;