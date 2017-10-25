//////////////////////////////////////////////////////////////////////////////////////////
// npm i -D html-webpack-plugin
// npm i -D @types/html-webpack-plugin
//////////////////////////////////////////////////////////////////////////////////////////

import { resolve } from 'path';
import { Configuration } from 'webpack';
// import * as HtmlWebpackPlugin from 'html-webpack-plugin'
// import * as configuration from '../configuration'

const PATHS = {
  src: resolve(__dirname, '..', 'src'),
  build: resolve(__dirname, '..', 'build'),
}

const FILES = {
  index: 'index.ts',
  indexTemplate: 'index.ejs'
}

const config: Configuration = {
  resolve: {
    extensions: ['.ts', '.json'],
    modules: ['node_modules', PATHS.src]
  },
  entry: {
    main: resolve(PATHS.src, FILES.index)
  },
  output: {
    path: resolve(PATHS.build),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    //Step 1
    // new HtmlWebpackPlugin()
    //
    //Step 1.5
    // new HtmlWebpackPlugin({ title: "Coin", filename: "duck.html" })
    //
    //Step2
    // new HtmlWebpackPlugin(
    //   {
    //     template: resolve(PATHS.src, FILES.indexTemplate),
    //     nameInPluginCtor: JSON.stringify(configuration)
    //   })
  ]
}

export default config
