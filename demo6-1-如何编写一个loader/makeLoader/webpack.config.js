const path = require('path')
module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:[{
                    loader: path.resolve(__dirname,'./loaders/replace.loader.js'),
                    options:{
                        name:'Dell'
                    }
                }]
            }
        ]
    }
}