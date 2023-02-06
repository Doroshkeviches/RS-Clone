const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry : './src/index.ts',
  output : {
    filename: '[contenthash].js',
    path: path.resolve(__dirname,'dist'),
    clean : true,
  },
  plugins : [
    new HTMLWebpackPlugin(
      {
        title: "RS-Clone",
      },
    ),
    new EslingPlugin(
      {
        extensions: 'ts',
        fix: true,
      }
    ),
  ],
  module: {
    rules : [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
