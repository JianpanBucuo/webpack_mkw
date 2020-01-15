const loaderUtils = require('loader-utils')
module.exports = function(source) {
    console.log('loader - 2')
    return source.replace('Nic','two').replace('{{title}}','中文标题')
}