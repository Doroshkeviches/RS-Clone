const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const plugins = [
    new HTMLWebpackPlugin(
      {
        title: "RS-Clone",
        template: './src/index.html'
      },
    ),
    new EslingPlugin(
      {
        extensions: 'ts',
        fix: true,
      }
    ),
  ];

  if (isProduction) {
    plugins.push(
      new MiniCSSExtractPlugin(
        {
          filename:'style.[contenthash].css',
        },
      )
    );
  }

  return {
    mode: isProduction ? 'production' : 'development',
    entry : './src/index.ts',
    output : {
      filename : isProduction ? 'index.[contenthash].js' : 'index.js',
      path: path.resolve(__dirname,'dist'),
      clean : true,
    },
    plugins,
    module: {
      rules : [
        {
          test: /\.css/,
          use: [
            isProduction ? MiniCSSExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCSSExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
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
  };
}
