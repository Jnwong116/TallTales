import "./App.css";
import logo from "./logo.svg";
import InputStage from "./pages/inputStage/inputStage";
import Login from "./pages/login/login";
import Register from "./pages/register/register"
import Lobby from "./pages/lobby/lobby";
import Dashboard from "./pages/dashboard/dashboard"

function App() {
  return (
    <div className="App">
      {<Dashboard></Dashboard>}
      {/*<InputStage></InputStage>*/}
      {/*<Lobby></Lobby>*/}
      {/*<Login></Login>*/}
      {/*<Register></Register>*/}
    </div>
  );
}

export default App;
