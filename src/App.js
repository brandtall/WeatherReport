import React, { Component } from "react";
import "./App.css";
import Display from "./Components/Display";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather Report</h1>
        <p>
          This is a weather forecast application that gives you basic
          information about the weather in the location you select!<br/> Please input
          the locaton in the form below and don't forget to use the format that
          is displayed in the background of the input boxes below. Enjoy!
        </p>
        <Display />
      </div>
    );
  }
}

export default App;
