import React from "react";

import "./score_style.css";

class Score extends React.Component {

    render() {
        const {
            user
        } = this.props;

        return (
            <div>
                <span>SCORE: {user.score}</span>
            </div>
        )
    }
}

export default Score;