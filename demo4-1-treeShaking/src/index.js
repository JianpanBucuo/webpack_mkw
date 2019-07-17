// tree shaking
  
/* 
 
*/
// import '@babel/polyfill';
import {add} from './math';
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map((value) => {
    console.log(value)
})
add(1,2);