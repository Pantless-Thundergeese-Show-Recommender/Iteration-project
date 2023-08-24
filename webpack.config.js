const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: '/client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // path was 'build'
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV = 'development', //can change to development/production
    module: {
      rules: [
        {
          test: /\.jsx?/, 
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          },
          // use: {
          //   loader: 'babel-loader',
          //   options: {
          //     presets: [
          //     '@babel/preset-env', 
          //     '@babel/preset-react'
          //     ],
              //plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
            //},
          //},
        }, 
        {
          test: /\.s?css/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        // {
        //   test: /\.gif/,
        // }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css', '.gif'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'hello yall',
        template: 'index.html'
      }),
    ],
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'build'),
            publicPath: '/build',
            //directory: path.join(__dirname, 'build'),
        },
        // proxy: {
        //     '/api': 'http://localhost:3000',
        // },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
          '/TVShow': 'http://localhost:3000',
          '/Favorite': 'http://localhost:3000',
          '/User': 'http://localhost:3000',
        },
    },
};