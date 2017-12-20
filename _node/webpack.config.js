const path = require('path');

module.exports = {
    entry: ['./../src/index.js'],

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            /*
            {
                test: /\.html$/,
                loader: "underscore-template-loader",
            },
            */

            /*
            {
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src")],
                exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/,
                query: {                    
                    presets: [['es2015', { modules: false }], 'stage-0'],
                    plugins: [['transform-decorators-legacy'], ['transform-class-properties']],
                }
                
            },
            */
            /*
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
            */
          ]
    },
};