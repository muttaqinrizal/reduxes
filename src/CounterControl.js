import React, { Component } from "react";

class CounterControl extends Component {
  add = () => {
    this.props.store.dispatch({
      type: "PLUS"
    });
    console.log("PLUS DISPATCH" + "STORE:" + this.props.store.getState());
  };

  minus = () => {
    this.props.store.dispatch({
      type: "MINUS"
    });
    console.log("MINUS DISPATCH" + "STORE:" + this.props.store.getState());
  };

  logout = () => {
    this.props.store.dispatch({
      type: "LOGOUT"
    });
    //console.log('KALI DISPATCH' + 'STORE:' + this.props.store.getState());
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default CounterControl;
