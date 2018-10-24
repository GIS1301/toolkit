const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "Tool": path.resolve(__dirname, './src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].min.js',
        // publicPath: "./build/",
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                // 只命中src目录里的js文件，加快 Webpack 搜索速度
                include: path.resolve(__dirname, "./src/")
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: 'index.html',
        //     minify: false,
        // })
    ],
    resolve: {
        extensions: ['.js', '.ts']
    }
};