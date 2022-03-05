import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import "./App.css";
import Lobby from "./pages/lobby/lobby";
import VoteStage from "./pages/voteStage/voteStage";
import Leaderboard from "./pages/leaderboard/leaderboard";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gameStage" element={<InputStage />} />
          <Route path="/voteStage" element={<VoteStage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
