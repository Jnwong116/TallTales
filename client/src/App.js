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
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
// import { css } from "@emotion/react";

class App extends React.Component {
  // state = {
  //   users: [],
  //   story: {
  //     title: "Cannibal Can Conundrum",
  //     start: "chris and jordan are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means.",
  //     story: "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in.",
  //     contributions: [
  //       {
  //           "username": "jordan",
  //           "sentence": "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in."
  //       },
  //       {
  //           "username": "user",
  //           "sentence": "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in."
  //       },
  //       {
  //           "username": "admin",
  //           "sentence": "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in."
  //       },
  //       {
  //           "username": "chris",
  //           "sentence": "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in."
  //       },
  //       {
  //           "username": "user",
  //           "sentence": "The snow continues falling, piling around the the cabin that Chris and Jordan find themselves trapped in."
  //       }
  //   ],
  //     prompt: {},
  //     userScores: [
  //           {
  //               "username": "jordan",
  //               "score": 210,
  //               "icon": "avatar03.png"
  //           },
  //           {
  //               "username": "user",
  //               "score": 210,
  //               "icon": "avatar02.png"
  //           },
  //           {
  //               "username": "admin",
  //               "score": 120,
  //               "icon": "avatar01.png"
  //           },
  //           {
  //               "username": "chris",
  //               "score": 150,
  //               "icon": "avatar04.png"
  //           }
  //       ]
  //   },
  //   rooms: { 
  //     room1: [], 
  //     room2: [], 
  //     room3: []
  //   },
  //   currUser: null,
  //   page: 0,
  //   stage: 0,
  //   prompt: 0
  // };
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
        page: 0,
        stage: 0,
        prompt: 0
    };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              {!this.state.currUser ? (
                this.state.page === 0 ? (
                  <Route path="/" element={<Login app={this} />} />
                ) : (
                  <Route path="/" element={<Register app={this} />} />
                )
              ) : this.state.page === 2 ? (
                <Route path="/" element={<Lobby app={this} />} />
              ) : this.state.page === 0 ? (
                <Route path="/" element={<InputStage app={this} />} />
              ) : this.state.page === 1 ? (
                <Route path="/" element={<VoteStage app={this} />} />
              ) : this.state.page === 4 ? (
                <Route path="/" element={<Dashboard app={this} />} />
              ) : this.state.page === 3 ? (
                <Route path="/" element={<Leaderboard app={this} />} />
              ) : (
                <Route path="/" element={<Profile app={this} />} />
              )}
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
            <Route path="/past-stories" element={<IndivStory story={this.state.story} />}></Route>
          </Switch>
          <ToastContainer limit={1}/>
        </Router>

      </div>
    );
  }
}

export default App;
