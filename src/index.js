import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "./App";
import "./Css/index.css";

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'INCREASE_LIKES':
      return {

      }
      break
    default: return currentState
      break
  }
}

const initialState = {
  username: '', password: ''
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <div><Provider store={store}>
    <App /></Provider>
  </div>,
  document.getElementById("root")
);
