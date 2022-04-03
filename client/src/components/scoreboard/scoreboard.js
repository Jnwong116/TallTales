import React from "react";

import "./scoreboard.css";

class Storyboard extends React.Component {

    render() {

        const { users } = this.props;

        function handleMouseEnter(e) {
            const contributions = document.getElementsByClassName(e.username);
            for(let c of contributions) {
                c.style.fontWeight = 'bold';
                c.style.color = 'white';
            }
        }

        function handleMouseLeave(e) {
            const contributions = document.getElementsByClassName(e.username);
            for(let c of contributions) {
                c.style.fontWeight = '';
                c.style.color = '#808080';
            }
        }

        return (
            <div className="scoreboard-players">
                {users.map((e, i) => {
                    return (
                        <div key={i} className="player-container" 
                                    onMouseEnter={() => handleMouseEnter(e)}
                                    onMouseLeave={() => handleMouseLeave(e)}>
                            <img src={require("../../assets/images/" + e.icon)} alt="img"></img>
                            <div className="player-info">
                                <div className="player-info-name">
                                    {e.username}
                                </div>
                                <div className="player-info-score">
                                    Score: {e.score}
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            
        )



    }
}

export default Storyboard;