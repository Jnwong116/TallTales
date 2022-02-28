import React from "react";

import "./App.css";

// Import Components
import InputStage from "./pages/inputStage/inputStage";
import Story from "./components/story/story";

class App extends React.Component {
  state = {
    stories: [],
    users: []
  }

  render() {
    // Import mock data
  this.stories = require('./data/stories.json');
  this.users = require('./data/users.json');

    return(
      <div>
        <InputStage></InputStage>
        <Story story={this.stories.stories[0]}></Story>
      </div>
    )


  }
}

export default App;
