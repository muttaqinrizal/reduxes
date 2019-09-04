import React, { Component } from "react";

class CounterDisplay extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    const data = this.props.store.getState();
    return <h1>{data.number}</h1>;
  }
}
export default CounterDisplay;
