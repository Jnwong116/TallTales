import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import CompletedStory from "../../components/completedStory/completedStory.js";
import Scoreboard from "../../components/scoreboard/scoreboard.js";

import "./indivStory.css"

class IndivStory extends React.Component {
    render() {
        const story = this.props.story;


        return (
            <div className="indiv-story">
                <div className="header">
                    <AppName text={story.title}></AppName>
                </div>
                <div className="indiv-story-content">
                    <div className="indiv-story-story">
                        <CompletedStory stories={story} title="The completed story..."/>
                    </div> 
                </div>
            </div>
        )
    }
}

export default IndivStory;