import React from "react";

import "./score.css";

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        <span>score: {this.props.score}</span>
      </div>
    );
  }
}

export default Score;
