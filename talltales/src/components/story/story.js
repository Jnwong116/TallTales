import React from "react";

import "./story_style.css";

class Story extends React.Component {
    
    render() {
        const {
            story
        } = this.props;

        return (
            <div>
                <p>{story.currStory}</p>
            </div>
        )
    }
}

export default Story;