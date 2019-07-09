 
console.log('source Map')
// window.onerror = function (msg, url, lineNo, columnNo, error) {
//   var string = msg.toLowerCase()
//   var substring = 'script error' // 这块下面会讲到
//   if (string.indexOf(substring) == -1) {
//     var message = [
//       'Message: ' + msg,
//       'URL: ' + url,
//       'Line: ' + lineNo,
//       'Column: ' + columnNo,
//       'Error object: ' + JSON.stringify(error)
//     ].join(' - ')
//     console.log(message)
//   }
//   return false
// }
window.onerror = function (message, url, line, column, error) {
  console.log('log---onerror::::',message, url, line, column, error);
}
throw new Error('this is the error happened in b.js');