 
console.log('111')
document.addEventListener('click', () => {
     import( /*webpackPrefetch: true */'./click').then(({handleClick}) => {
        handleClick()
     })
// 
})
function clickEvent () {
      
}