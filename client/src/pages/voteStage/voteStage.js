import React from "react";
import AppName from "../../components/appName/appName.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./voteStage.css";

import { findRaconteur} from "../../actions/vote/raconteur.js";
import { generateAIinput, AIinput, AIVote, select, confirmVote } from "../../actions/vote/vote.js";

class VoteStage extends React.Component {
  state = {
    loading: true,
    choice: "Choose a sentence"
  }

  componentDidMount() {
    if (this.state.loading) {
      if (this.raconteur === this.props.app.state.currUser.username) {
        generateAIinput(this.users, this.props.app, this);
      }
      else {
        AIinput(this.users, this.props.app, this);
        AIVote(this.users, this.stories, this.raconteur, this.props.app, this);
      }
    }
  }

  render() {
    // Import mock data
    // Requires server call to get list of stories and users from server
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    this.raconteur = this.users.users[findRaconteur(this.users.users)].username;
    // console.log(this.props.app.state);

    return (
      <div className="vote-stage">
        {/* TODO: Make this header into a component so it's reusable in every page */}
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.props.app.state.currUser}></Score>
        </div>
        <div className="vote-stage-content">
          <div className="vote-stage-story">
            <div className="story-content">
              <Story story={this.stories.currStory.story}></Story>
            </div>
          </div>
          <div className="vote-stage-turns">
            {
              this.raconteur === this.props.app.state.currUser.username ?
              <div className="vote-stage-raconteur">
                <span className="raconteur">YOUR</span> TURN
              </div> :
              <div className="vote-stage-raconteur">
                <span className="raconteur">{this.raconteur}</span>'s TURN
              </div>
            }
            <div className="vote-stage-options">
              {this.users.users.map((e, i) => {
                if (e.username !== this.raconteur) {
                  return (
                    <div key={i} className="vote-stage-option">
                      <UserIcon username={e.username} icon={e.icon}></UserIcon>
                      <div className="vote-option-text" id={e.username} onClick={() => {select(this.users, e.username, this.raconteur, this.props.app, this);}}>
                        {e.currentSentence}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {
          this.props.app.state.currUser.raconteur ?
          <div className="vote-stage-sentence">
            <div className="sentence-title">YOUR CHOICE</div>
            <div className="sentence-content-choice">
              {this.state.choice}
            </div>
            <div className="checkMarkContainer" onClick={() => {confirmVote(this.users, this.stories, this.props.app, this);}}>
              <img src={require("../../assets/images/pixelCheckmark.png")} width="30" height="30" alt="" />
            </div>
          </div>
          :
          <div className="vote-stage-sentence">
            <div className="sentence-title">YOUR SENTENCE</div>
            <div className="sentence-content">
              {this.props.app.state.currUser.currentSentence}
            </div>
          </div> 
        }
        
      </div>
    );
  }
}

export default VoteStage;
