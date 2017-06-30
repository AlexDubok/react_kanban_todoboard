/* eslint-disable */

let webpack          = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config           = require('./webpack.config.js');
let path             = require('path');

new WebpackDevServer(webpack(config), {
    contentBase       : path.join(__dirname, 'dist'),
    // compress          : true,
    port              : 3000,
    // stats             : 'errors-only',
    stats: { colors: true },
    open              : true,
    historyApiFallback: true,
    hot               : true,
    hotOnly: true
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    // }
}).listen(3000, '0.0.0.0', (err) => {
    if (err) {
        return console.log(err);
    }
});
