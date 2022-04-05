import "./App.css";
// import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Lobby from "./pages/lobby/lobby";
import VoteStage from "./pages/voteStage/voteStage";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import Leaderboard from "./pages/leaderboard/leaderboard";
import IndivStory from "./pages/indivStory/indivStory";
import { ToastContainer } from 'react-toastify';
import ReactAudioPlayer from 'react-audio-player';
import 'react-toastify/dist/ReactToastify.css';
import { route } from "./actions/router/render";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { css } from "@emotion/react";

class App extends React.Component {
    state = {
        users: [],
        story: {
            title: "",
            start: "",
            story: "",
            contributions: [],
            prompt: {},
            userScores: []
        },
        rooms: { 
            room1: [], 
            room2: [], 
            room3: []
        },
        currUser: null,
        page: "login",
        stage: 0,
        prompt: 0,
        muted: false,
    };

  render() {
    this.page = route(this);
    return (
      <div className="App">
        <ReactAudioPlayer
            src={require("./assets/music/game.wav")}
            autoPlay={false}
            loop
            volume={0.3}
            ref={(element) => {
                this.audioRef = element;
            }}
        />
        <Router>
          <Switch>
            <Route 
              exact path={["/", "/login", "/register", "/dashboard", "/profile", "/lobby", "/leaderboard", "/inputStage", "/voteStage"]}
              render={ props => (
                !this.state.currUser ? (
                  this.page === "login" ? (
                    <Login {...props} app={this} /> 
                  ) : (
                    <Register {...props} app={this} />
                  )
                ) : this.page === "lobby" ? (
                  <Lobby {...props} app={this} gameAudioRef={this.audioRef}/>
                ) : this.page === "inputStage" ? (
                  <InputStage {...props} app={this} gameAudioRef={this.audioRef}/>
                ) : this.page === "voteStage" ? (
                  <VoteStage {...props} app={this} gameAudioRef={this.audioRef}/>
                ) : this.page === "dashboard" ? (
                  <Dashboard {...props} app={this}/>
                ) : this.page === "leaderboard" ? (
                  <Leaderboard {...props} app={this} gameAudioRef={this.audioRef}/>
                ) : (
                  <Profile {...props} app={this} />
                )
              )}
            />


            {/* <Route path="/">
              {!this.state.currUser ? (
                this.state.page === 0 ? (
                  <Route path="/" element={<Login app={this} />} />
                ) : (
                  <Route path="/" element={<Register app={this} />} />
                )
              ) : this.state.page === 2 ? (
                <Route path="/" element={<Lobby app={this} gameAudioRef={this.audioRef}/>} />
              ) : this.state.page === 0 ? (
                <Route path="/" element={<InputStage app={this} gameAudioRef={this.audioRef}/>} />
              ) : this.state.page === 1 ? (
                <Route path="/" element={<VoteStage app={this} gameAudioRef={this.audioRef}/>} />
              ) : this.state.page === 4 ? (
                <Route path="/" element={<Dashboard app={this}/>} />
              ) : this.state.page === 3 ? (
                <Route path="/" element={<Leaderboard app={this} gameAudioRef={this.audioRef}/>} />
              ) : (
                <Route path="/" element={<Profile app={this} />} />
              )}
            </Route> */}


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

            <Route path="/past-stories" render={() => (<IndivStory />)}></Route>
            <Route render={() => <div>404 Not found</div>} />
          </Switch>
          <ToastContainer limit={1}/>
        </Router>

      </div>
    );
  }
}

export default App;
