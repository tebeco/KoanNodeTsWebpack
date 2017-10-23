import { resolve } from 'path';
import { Configuration } from 'webpack';

const PATHS = {
  src: resolve(__dirname, '..', 'src'),
  build: resolve(__dirname, '..', 'build'),
}

const FILES = {
  index: 'index.ts'
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
        use: 'ts-loader'
      }
    ]
  }
}

export default config
