const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve('./public'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react']
                }
            }
        ]
    }
}
