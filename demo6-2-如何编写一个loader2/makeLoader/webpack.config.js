const path = require('path')
module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist')
    },
    resolveLoader:{
        modules:[
            'node_modules','./loaders/'
        ]
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:[{
                        loader:  'replace.loader',
                        options:{
                            name:'1111'
                        }
                    },
                    {
                        loader: 'replace.loaderAsync',
                        options:{
                            name:'1111'
                        }
                    }]
            }
        ]
    }
}