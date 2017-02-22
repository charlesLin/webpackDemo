var webpack = require('webpack');
module.exports = {
  entry: {
    main: "./src/main.js",
    about : "./src/about/about.js"
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader?presets[]=es2015&presets[]=react",
        // query: {
        //   presets: ["es2015", "react"]
        // }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendors")
  ]

};