import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  login = () => {
    this.props.store.dispatch({
      type: 'LOGIN'
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
      </div>
    );
  }
}

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

class CounterControl extends Component {
  add = () => {
    this.props.store.dispatch({
      type: 'PLUS'
    });
    console.log('PLUS DISPATCH' + 'STORE:' + this.props.store.getState());
  };

  minus = () => {
    this.props.store.dispatch({
      type: 'MINUS'
    });
    console.log('MINUS DISPATCH' + 'STORE:' + this.props.store.getState());
  };

  logout = () => {
    this.props.store.dispatch({
      type: 'LOGOUT'
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

class DummyComponent extends Component {
  render() {
    return <CounterControl store={this.props.store} />;
  }
}

export default App;
