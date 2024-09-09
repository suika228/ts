const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    open: true,
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.ts$/,
        exclude: /node_modules/,
      },
    ],
  },
};
