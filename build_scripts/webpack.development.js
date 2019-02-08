const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'End user activity monitor',
            template: 'assets/index.html',
            filename: 'index.html',
            inject: 'head'
          })
    ]
})