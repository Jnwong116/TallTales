import "./App.css";
// import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register"
import Lobby from "./pages/lobby/lobby";
import VoteStage from "./pages/voteStage/voteStage";
import Dashboard from "./pages/dashboard/dashboard"
import HowToPlay from "./pages/howToPlay/howToPlay"
import Profile from "./pages/profile/profile"
import Leaderboard from "./pages/leaderboard/leaderboard";

import React from "react";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

// import data
const users = require("./data/users.json");
const stories = require("./data/stories.json");

class App extends React.Component {
  state = {
    users: users,
    stories: stories,
    currUser: null,
    page: 0,
    stage: 0,
    prompt: 0
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              {!this.state.currUser ? 
                  (this.state.page === 0 ? <Route path="/" element={<Login app={this} />} /> : 
                    <Route path="/" element={<Register app={this} />} /> ) : 
                  (this.state.page === 2 ? <Route path="/" element={<Lobby app={this} />} /> : 
                    (this.state.page === 0 ? <Route path="/" element={<InputStage app={this} />} /> :
                      (this.state.page === 1 ? <Route path="/" element={<VoteStage app={this} />} /> :
                        (this.state.page === 4 ? <Route path="/" element={<Dashboard app={this} />} /> :
                          (this.state.page === 5 ? <Route path="/" element={<HowToPlay app={this} />} /> :
                            (this.state.page === 3 ? <Route path="/" element={<Leaderboard app={this} />} />  :
                              <Route path="/" element={<Profile app={this} />} /> 
                            )
                        )
                      )
                    )
                  )
                )   
              }
            </Route>
            {/* <Route path="/game">
              {this.state.page === 0 ? <Route path="/game" element={<InputStage app={this} />} /> : (this.state.page === 1 ? <Route path="/game" element={<VoteStage app={this} />} /> : <Route path="/game" element={<Leaderboard app={this} />} /> )}
            </Route> */}
            {/* <Route path="/" element={<Login app={this} /> } /> */}
            {/* <Route path="/register" element={<Register app={this} /> } /> */}
            {/* <Route path="/lobby" element={<Lobby app={this} /> } /> */}
            {/* <Route path="/inputStage" element={<InputStage app={this} />} />
                <Route path="/voteStage" element={<VoteStage app={this} />} /> */}
                {/* <Route path="/dashboard" element={<Dashboard app={this} />} /> */}
                {/* <Route path="/howToPlay" element={<HowToPlay app={this} />} />
                <Route path="/profile" element={<Profile app={this} />} /> */}

            {/* <Route path="/leader" element={<Leaderboard app={this} />}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
