const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry : './src/registrationPage/scripts/index.js',
    output : {
    filename: '[contenthash].js',
    path: path.resolve(__dirname,'dist'),
    clean : true
},
plugins : [
 new HTMLWebpackPlugin({
    template: './src/registrationPage/registrationPage.html'
 }),
],
module: {
    rules : [
        {test: /\.css/,
        use: ['style-loader','css-loader'],
    },
    {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader",],
      },
    ]
}
}
