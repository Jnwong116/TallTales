import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register"
import "./App.css";
import Lobby from "./pages/lobby/lobby";

function App() {
  return (
    <div className="App">
      {/* <InputStage></InputStage> */}
      <Lobby></Lobby>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
