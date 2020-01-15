const loaderUtils = require('loader-utils')
module.exports = function(source) {
     
    const options = loaderUtils.getOptions(this)
    const result = source.replace('Dell', options.name || 'Nic')
    this.callback(
        null,result
    )
}