import "./App.css";
import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register"
import Lobby from "./pages/lobby/lobby";
import VoteStage from "./pages/voteStage/voteStage";
import Dashboard from "./pages/dashboard/dashboard"
import React from "react";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
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
              {!this.state.currUser ? (this.state.page === 0 ? <Route path="/" element={<Login app={this} />} /> : <Route path="/" element={<Register app={this} />} /> ) : <Route path="/" element={<Lobby app={this} />} />}
            </Route>
            <Route path="/game">
              {this.state.page === 0 ? <Route path="/game" element={<InputStage app={this} />} /> : <Route path="/game" element={<VoteStage app={this} />} />}
            </Route>
            {/* <Route path="/" element={<Login app={this} /> } /> */}
            {/* <Route path="/register" element={<Register app={this} /> } /> */}
            {/* <Route path="/lobby" element={<Lobby app={this} /> } /> */}
            {/* <Route path="/inputStage" element={<InputStage app={this} />} />
                <Route path="/voteStage" element={<VoteStage app={this} />} /> */}
                <Route path="/dashboard" element={<Dashboard app={this} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
