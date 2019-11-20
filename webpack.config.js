const path = require('path')
// const webpack = require ("webpack");
// const webpackDevServer = require('webpack-dev-server');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer:{                                     //配置
        contentBase: "./dist", 
        historyApiFallback:true,
        inline:true,
        progress:true,
        hot:true,
        port:9000
    },
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin() //引用这个插件实现热更新
    //     ]
    // }
    // module: {
    //     loader: [
    //         {test: /\.css$/, loader: 'style-loader!css-loader'},
    //         {test: /\.js$/, loader: 'babel-loader'}
    //     ]
    // }

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'react-hot-loader',
                    loader: 'babel-loader',
                }
            }
        ]
    }
}