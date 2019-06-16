import React from "react";
import Component from "./override/component";
import './sass/App.scss';

//Components
import Routes from "../src/routes/routes";

class App extends Component {
  render() {
    return (
      <div id="body">
        <Routes />
      </div>
    );
  }
}

export default App;
