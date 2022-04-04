import React from "react";

import "./completedStory.css"

class CompletedStory extends React.Component {
    render() {
        const { stories, title } = this.props;

        return (
            <div className="completed-story">
                <div className="completed-story-title">
                    {title}
                </div>
                <div className="completed-story-start">
                    {stories.currStory.start}
                </div>
                <div className="completed-story-contribution">
                    {stories.currStory.contributions.map((obj, i) => {
                        return (
                            <span key={i} className={obj.username}>
                                {obj.sentence + " "}
                            </span>
                        )
                        })
                    }
                </div> 
            </div>
        )

    }
    
    


}

export default CompletedStory;