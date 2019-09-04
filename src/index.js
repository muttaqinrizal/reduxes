import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";

const reducer = (state = { isLogin: false, number: 0 }, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        number: state.number + 1
      };
    case "MINUS":
      return {
        ...state,
        number: state.number - 1
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: true
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
  //return state;
};

const store = createStore(
  reducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
