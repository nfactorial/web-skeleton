var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var module_dir = __dirname + '/node_modules';

var config = {
    addVendor: function(name, path) {
        this.resolve.alias[name] = path;
        //this.module.noParse.push(new RegExp(path));
    },
    resolve: {
        alias: {}
    },
    entry: {
        app: ['./development/main.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'development')
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.sass?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
                include: [
                    path.resolve(__dirname, 'development')
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            NODE_ENV: 'production'
        })
    ]
};

config.addVendor('react', module_dir + '/react/dist/react.js');
config.addVendor('react-dom', module_dir + '/react-dom/dist/react-dom.js');
config.addVendor('jquery', module_dir + '/jquery/dist/jquery.min.js');
config.addVendor('bootstrap', module_dir + '/bootstrap/dist/js/bootstrap.js');
config.addVendor('bootstrap.css', module_dir + '/bootswatch/sandstone/bootstrap.css');
config.addVendor('playcanvas', module_dir + '/@nfactorial/playcanvas/dist/playcanvas-stable.min.js');

module.exports = config;
