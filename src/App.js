import React, { Component } from "react";
import axios from "axios";

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
    inputText: "",
    errorMsg: ""
  };

  componentDidMount() {
    axios.get("/api/todos").then(res => {
      this.setState({ todos: res.data });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/todos", { title: this.state.inputText })
      .then(res => this.setState({ todos: res.data, inputText: "" }))
      .catch(err => this.setState({ errorMsg: "Not Happening" }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {this.state.errorMsg && (
          <span className="error">{this.state.errorMsg}</span>
        )}
        <form onSubmit={this.handleSubmit} action="">
          <input
            data-cypress-input
            value={this.state.inputText}
            name="inputText"
            onChange={this.handleChange}
            autoFocus
            className="new_todo"
            placeholder="Add new Todo"
          />
        </form>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
