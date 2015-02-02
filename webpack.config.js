var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './app/scripts/main'
  ],
  output: {
    path: __dirname + '/app/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx?harmony'] },
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony'] },
      { 
        test: /\.scss$/, 
        loader: "style!raw!sass?outputStyle=expanded&" +
                "includePaths[]=" + (path.resolve(__dirname, "./node_modules/")) 
      }
    ]
  }
}
