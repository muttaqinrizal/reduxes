import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterDisplay from "./CounterDisplay";
import DummyComponent from "./DummyComponent";
import Count from "./Count";

class App extends Component {
  login = () => {
    this.props.store.dispatch({
      type: "LOGIN"
    });
  };

  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    if (this.props.store.getState().isLogin == false) {
      return <button onClick={this.login}>LOGIN</button>;
    }

    return (
      <div className="App">
        <CounterDisplay store={this.props.store} />
        <DummyComponent store={this.props.store} />
        <Count jumlah={"dua"} />
      </div>
    );
  }
}

export default App;
