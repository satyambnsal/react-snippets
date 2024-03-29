const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports= {
  entry:path.resolve(__dirname,'src/App.js'),
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.html$/,
        use:{
          loader:'html-loader'
        }
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:'./src/index.html',
      filename:'./index.html'
    })
  ]
}