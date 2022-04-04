import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import CompletedStory from "../../components/completedStory/completedStory.js";
import Scoreboard from "../../components/scoreboard/scoreboard.js";

import "./leaderboard.css"

import { sortPlayers, saveStory } from "../../actions/leaderboard/displayScores.js";

class Leaderboard extends React.Component {

    render() {
        // Import mock data
        // Requires server call to get list of stories and users from server
        this.stories = this.props.app.state.stories;
        this.users = this.props.app.state.users;

        // Sort the users from highest to lowest points
        this.users.users.sort(sortPlayers);

        const footerMessages = [
            "You have the highest score! Your effort paid off!",
            "Good effort! One day they'll recognize your genius..."
        ]

        return (
            <div className="leaderboard">
                <div className="header">
                    <AppName></AppName>
                </div>
                <div className="leaderboard-content">
                    <div className="leaderboard-story">
                        <CompletedStory stories={this.stories} title="The completed story..."/>
                    </div>
                    <div className="leaderboard-scoreboard">
                        <Scoreboard users={this.users.users} />
                    </div>   
                </div>
                <div className="footer">
                    <div className="footer-message">
                        {(this.props.app.state.currUser.score === this.users.users[0].score) ? 
                        footerMessages[0] : footerMessages[1]}
                    </div>
                    <div className="footer-button">
                        <Button text="HOME" 
                            handleClick={() => {
                                window.alert('home');
                                // saveStory(this.users, this.stories, this.props.app)
                            }}
                        /> 
                    </div>
                </div>       
            </div>    
        )
    }
}

export default Leaderboard;