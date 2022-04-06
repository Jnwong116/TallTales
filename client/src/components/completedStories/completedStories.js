import React from "react";
// import UserIconMedium from "../userIcon/userIconMedium.js";
import ArrowLeft from "../cssArrows/arrowLeft.js";
import ArrowRight from "../cssArrows/arrowRight.js";
import Button from "../button/button.js";
import { nextStory, prevStory } from "../../actions/dashboard/stories.js";
import { getUser } from "../../actions/global/users.js";
import { shareStory, editTitle } from "../../actions/profile/shareStory.js";
import EditIcon from '@mui/icons-material/Edit';

import "./completedStories.css";

class CompletedStories extends React.Component {
    state = {
        story: 0,
        user: {
          username: "",
          icon: "avatar01.png",
          stories: []
        }
      }

      componentDidMount() {
        getUser(this, this.props.app);
      }

  render() {
    return (
    //   <div className="profileHomeInterface">
    //     <UserIconMedium username={this.props.parent.state.user.username} icon={this.props.parent.state.user.icon} />
    //   </div>
        <div className="profileHomeInterface">
            <div className="storiesNavigation">
                <span className="browseStoriesLeftArrow" onClick={() => {prevStory(this.state.story, this.state.user, this)}}>
                    <ArrowLeft />
                </span>
                <div className="browseStoriesHeader">
                    {
                        this.state.user.stories.length === 0 ? 
                        "Completed Stories" :
                        <span>
                            <span id="storyTitle">{this.state.user.stories[this.state.story].title}</span>
                            <span>{" (" + (this.state.story + 1) + "/" + this.state.user.stories.length + ")"}</span>
                        </span>
                        
                    }
                    {
                        this.state.user.stories.length !== 0 ? 
                        <EditIcon className="editIcon" onClick={() => editTitle(this)} /> :
                        <></>
                    }
                </div>
                <span className="browseStoriesRightArrow" onClick={() => {nextStory(this.state.story, this.state.user, this)}}>
                    <ArrowRight />
                </span>
            </div>
            <Button text="SHARE STORY"
                handleClick={() => {shareStory(this.state.user.stories[this.state.story], this.state.user.username)}} />
            <div className="storiesDisplay">
                {(this.state.user.stories.length === 0) ? 
                "You have not completed any stories yet! Go play a game and come back to see your completed stories!" :
                this.state.user.stories[this.state.story].story
                }
            </div>
        </div>
    )
  }
}

export default CompletedStories;
