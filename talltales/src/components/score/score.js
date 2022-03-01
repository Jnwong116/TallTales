import React from "react";

import "./score.css";

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        <span>SCORE: {this.props.user.score}</span>
      </div>
    );
  }
}

export default Score;
