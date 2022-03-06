import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./leaderboard.css"

import { sortPlayers } from "../../actions/leaderboard/displayScores.js";

class Leaderboard extends React.Component {

    render() {
        this.stories = this.props.app.state.stories;
        this.users = this.props.app.state.users;

        // Sort the users from highest to lowest points
        this.users.users.sort(sortPlayers);

        // Map number index user to className
        const indexToClass = {
            0: "leaderboard-player-0",
            1: "leaderboard-player-1-2",
            2: "leaderboard-player-1-2",
            3: "leaderboard-player-3-4-5",
            4: "leaderboard-player-3-4-5",
            5: "leaderboard-player-3-4-5"
        }

        return (
            <div className="leaderboard">
                <div className="header">
                    <AppName></AppName>
                </div>
                <div className="leaderboard-content">
                    <div className="leaderboard-story-recap">
                        <div className="leaderboard-title">
                            {"<THE STORY>"}
                        </div>
                        <div className="leaderboard-story-start">
                            {this.stories.currStory.start}
                        </div>
                        {this.stories.currStory.contributions.map((obj, i) => {
                            return (
                                <div key={i} className="leaderboard-story-contribution">
                                    {obj.sentence}
                                </div>
                            )
                            })
                        }
                    </div>
                    <div className="leaderboard-total-points">
                        <div className="leaderboard-title">
                            {"<LEADERBOARD>"}   
                        </div>
                        <div className="leaderboard-players-winner">
                            <div key={0} className={indexToClass[0]}>
                                <UserIcon username={this.users.users[0].username} icon={this.users.users[0].icon}></UserIcon>
                                <div className="leaderboard-player-score">
                                    {this.users.users[0].score}
                                </div>
                             </div>
                        </div>
                        
                        <div className="leaderboard-players">
                            {this.users.users.map((e, i) => {
                                if(i > 0) {
                                    return (
                                        <div key={i} className={indexToClass[i]}>
                                            <UserIcon username={e.username} icon={e.icon}></UserIcon>
                                            <div className="leaderboard-player-score">
                                                {e.score}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            
                            })}
                        </div>                       
                    </div>   
                </div>
                <div className="your-score">
                    YOUR SCORE: <strong>{this.props.app.state.currUser.score}</strong>
                </div>
                <Button
                    text="DONE"
                    handleClick={() => {window.alert('back to dashboard')}}
                ></Button>
            </div>    
        )
    }
}

export default Leaderboard;