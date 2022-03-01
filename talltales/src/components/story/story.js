import React from "react";

import "./story.css";

class Story extends React.Component {
  render() {
    const { story } = this.props;

    return (
      <div className="story">
        <div className="story-title">STORY</div>
        <div className="story-current">{story.currStory}</div>
      </div>
    );
  }
}

export default Story;
