const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'public');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
module.exports = {
    cache: true,
    entry: {
        main: './src/index.js'
    },
    output: {
        path: 'public/build',
        filename: 'bundle.js'
    },
    // devtool: 'eval-source-map',
    module: {
        // preLoaders: [{
        //     test: /\.js$/,
        //     loader: "eslint-loader",
        //     include: APP_PATH,
        // }],
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
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
    postcss: () => [precss, autoprefixer],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            }
        })
    ],
};