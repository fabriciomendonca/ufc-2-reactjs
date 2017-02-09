const path = require('path');

const PATHS = {
  dev: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist')
};

module.exports = {
  entry: path.join(PATHS.dev, '/main.js'),
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(PATHS.dev),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: PATHS.dist
  }
}