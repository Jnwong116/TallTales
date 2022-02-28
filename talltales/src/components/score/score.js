import React from "react";

import "./score.css";

class Score extends React.Component {
  render() {
    return <span className="score">Score: {this.props.score}</span>;
  }
}

export default Score;
