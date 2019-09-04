import React, { Component } from "react";
import CounterControl from "./CounterControl";

class DummyComponent extends Component {
  render() {
    return <CounterControl store={this.props.store} />;
  }
}

export default DummyComponent;
