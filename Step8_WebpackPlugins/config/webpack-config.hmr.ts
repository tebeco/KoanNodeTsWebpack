import { resolve } from 'path';
import { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as configuration from '../configuration'

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
    extensions: ['.ts', '.json', '.js'],
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
    // LOL NO NEED
    // new HotModuleReplacementPlugin(),
    // LOL NO NEED
    new HtmlWebpackPlugin(
      {
        template: resolve(PATHS.src, FILES.indexTemplate),
        nameInPluginCtor: JSON.stringify(configuration)
      })
  ],
  devServer: {
    stats: {
      colors: true
    }
  },

}

export default config
