import '@babel/polyfill'
let fun = () => console.log('hello babel')
console.log('abc'.padStart(10));

// npx babel src/test.js --out-dir lib
// .babelrc 
// {
//     "presets": [
//       [
//         "@babel/preset-env",
//         {
//           "targets": {
//             "node": "4"
//           }
//         }
//       ]
//     ]
//   }