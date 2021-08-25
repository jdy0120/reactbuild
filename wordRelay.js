// 필요한 패키지인 React 불러오기
const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello webpack",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

// 다른 파일에서 불러올 수 있도록 내보내주는 것도 잊지말기
modult.exports = WordRelay;
