import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import CompletedStory from "../../components/completedStory/completedStory.js";
import Scoreboard from "../../components/scoreboard/scoreboard.js";

import "./indivStory.css"

class IndivStory extends React.Component {
    render() {
        const story = this.props.story;

        const COPY_PLACEHOLDER = "SAMPLE TEXT";

        return (
            <div className="indiv-story">
                <div className="header">
                    <AppName text={story.title}></AppName>
                </div>
                <div className="indiv-story-content">
                    <div className="indiv-story-story">
                        <CompletedStory story={story} title="The completed story..."/>
                    </div>
                    <div className="indiv-story-scoreboard">
                        <Scoreboard users={story.userScores} />
                    </div>  
                </div>
                <div className="indiv-story-footer">
                    <div className="indiv-story-footer-button">
                        <Button text="COPY TO CLIPBOARD" 
                            handleClick={() => {
                                navigator.clipboard.writeText(COPY_PLACEHOLDER);
                            }}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}

export default IndivStory;