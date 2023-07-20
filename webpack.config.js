const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: ["./client/index.js"],
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  //config needed in webpack to use environment variables in React
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
