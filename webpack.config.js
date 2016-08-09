var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'public');
module.exports = {
    cache: true,
    entry: {
        main: './src/index.js'
    },
    output: {
        path: 'public/build',
        filename: 'bundle.js'
    },
    module: {
        // preLoaders:[{

        // }],
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: APP_PATH,
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        }, ]
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('common.js')
    // ]
};
