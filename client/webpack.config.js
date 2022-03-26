const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

const webpack=require("webpack")
// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    devtool: "source-map",
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
      new HtmlWebpackPlugin({
        template: "./index.html"
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, './src-sw.js'),
 swDest: 'src-sw.js',

      
    }),
    
      new WebpackPwaManifest({
      name: 'My Progressive Web App',
      inject: true,
      includeDirectory: true,
      start_url: "/",
      fingerprints: false,
publicPath: "/",
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      
      ]
    }),
  
          
        new webpack.ProvidePlugin({
          TextDecoder: ['text-encoding', 'TextDecoder'],
          TextEncoder: ['text-encoding', 'TextEncoder']
      })

    ],

    module: {
      rules: [
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
      },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{

            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
            }

          }
        }
      ],
      
    },
    
  };

};
