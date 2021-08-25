// node에서 path를 가져온다.
const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  // 실서비스는 production이라고 해준다.
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"],
  },

  entry: {
    app: ["./client"],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },

  module: {
    rules: [
      {
        // js 파일과 jsx 파일에 적용하겠다. 어떤 것을? babel-loader를
        test: /\.jsx?/,
        // babel=loader : 최신 문법을 다운그레이드
        loader: "babel-loader",
        // babel의 옵션들
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          // class 문법을 사용하기 위해 추가해주었다.
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
};
