const loaderUtils = require('loader-utils')
module.exports = function(source) {
     
    const options = loaderUtils.getOptions(this)
    console.log('loader - 1')
    console.log(options,'options')
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace('Dell', 'Nic')
         callback(
            null,result
        )
    },1000)

}