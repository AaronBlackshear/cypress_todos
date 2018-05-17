import React, { Component } from "react";

import "./App.css";

import List from "./components/List";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Teach Cypress Testing Suite",
      //   isComplete: false
      // }
    ],
    inputText: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <input
          data-cypress-input
          value={this.state.inputText}
          name="inputText"
          onChange={this.handleChange}
          autoFocus
          className="new_todo"
          placeholder="Add new Todo"
        />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
