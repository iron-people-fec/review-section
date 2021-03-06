const path = require('path');

module.exports = {
  entry: './client/App.jsx',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

 module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
     },
     {
      test: /\.css$/,
       use: ["style-loader", "css-loader"],
     },
     {
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
     },
    ]
  },
};