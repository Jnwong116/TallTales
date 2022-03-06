import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./leaderboard.css"

class Leaderboard extends React.Component {

    render() {
        // Import mock data
        this.usersData = require("./../../data/users.json");
        this.storiesData = require("./../../data/stories.json");

        // Sort the users from highest to lowest points
        function highestToLowest( a, b ) {
            const aScore = parseInt(a.score);
            const bScore = parseInt(b.score);
            if(aScore > bScore) {
                return -1;
            }
            if(aScore < bScore) {
                return 1;
            }
            return 0;
        }

        this.usersData.users.sort(highestToLowest);

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
                            {this.storiesData.currStory.start}
                        </div>
                        {this.storiesData.currStory.contributions.map((obj, i) => {
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
                                <UserIcon username={this.usersData.users[0].username} icon={this.usersData.users[0].icon}></UserIcon>
                                <div className="leaderboard-player-score">
                                    {this.usersData.users[0].score}
                                </div>
                             </div>
                        </div>
                        
                        <div className="leaderboard-players">
                            {this.usersData.users.map((e, i) => {
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
                {/* TODO: placeholer score here. Change to THIS user's score */}
                <div className="your-score">
                    YOUR SCORE: <strong>187</strong>
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