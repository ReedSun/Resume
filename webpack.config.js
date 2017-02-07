var webpack = require('webpack')
module.exports = {
  entry: "./js/index.js",
  output: {
    path: __dirname + '/dist/js',
    filename: "marge.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins : [ new webpack.ProvidePlugin({// 全局依赖jQuery,不需要import了  
        $ : "jquery",  
        jQuery : "jquery",  
        "window.jQuery" : "jquery"  
    }) ]
}