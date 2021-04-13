const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  // entry: path.resolve(__dirname, `src`, `app`),

  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 8080,
    historyApiFallback: true,
    proxy: { "/api": { target: "http://localhost:8081", secure: false } },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "imgs",
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  cache: true,
};
