import { resolve } from 'path';
import { Configuration, DefinePlugin, /*optimize*/ } from 'webpack';
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
    new HtmlWebpackPlugin(
      {
        template: resolve(PATHS.src, FILES.indexTemplate),
        nameInPluginCtor: JSON.stringify(configuration)
      }),
    new DefinePlugin({
      TOGGLE_FEATURE_A: true
    })
    //,
    // new optimize.UglifyJsPlugin({
    //   sourceMap: true
    // })
  ]
}

export default config
