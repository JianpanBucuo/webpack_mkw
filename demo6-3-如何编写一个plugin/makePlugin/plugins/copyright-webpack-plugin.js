class CopyrightWebpackPlugin {
    constructor(options) {
        console.log('插件被使用了')
        console.log(options)
    }
    apply(complier) {
        //complier: webpack 实例
        console.log('执行插件')
        complier.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, callback) => {
            //compilation 这次打包相关的内容
            debugger;
            console.log(compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright-by-dell-li'
                },
                size: function() {
                    return 21
                }
            })
            callback()
        })
        complier.hooks.compile.tap('CopyrightWebpackPlugin',compilation => {
            console.log('tap')
        })
    }
}
module.exports = CopyrightWebpackPlugin;