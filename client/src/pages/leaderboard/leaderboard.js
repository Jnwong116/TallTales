import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import CompletedStory from "../../components/completedStory/completedStory.js";
import Scoreboard from "../../components/scoreboard/scoreboard.js";

import "./leaderboard.css"

import { sortPlayers, saveStory } from "../../actions/leaderboard/displayScores.js";
import { getCurrentUser } from "../../actions/global/users.js";

class Leaderboard extends React.Component {
    state = {
        user: {
            username: "",
            icon: "avatar01.png",
            score: 0
        },
        users: [
            {
                username: "",
                score: 0,
                icon: "avatar01.png"
            }
        ]
    }

    componentDidMount() {
        // Sort the users from highest to lowest points
        this.setState({
            users: this.props.app.state.users.sort(sortPlayers),
            user: getCurrentUser(this.props.app)
        })
    }

    render() {
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
                        <CompletedStory story={this.props.app.state.story} title="The completed story..."/>
                    </div>
                    <div className="leaderboard-scoreboard">
                        <Scoreboard users={this.state.users} />
                    </div>   
                </div>
                <div className="footer">
                    <div className="footer-message">
                        {(this.state.user.score === this.state.users[0].score) ? 
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