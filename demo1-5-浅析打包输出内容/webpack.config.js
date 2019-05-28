const path = require('path');

module.exports = {
    // entry:'./src/index.js',
    mode: 'development', // production
    entry:{
        main: './src/index.js'
    },
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'bundle')

    }
}