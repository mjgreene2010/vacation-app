import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { server } from './server';
import './Css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
      server.get('http://localhost:4000/Trips').then(trips => {
        store.dispatch({ type: 'RECEIVE_TRIPS', payload: trips });
      });
      break;
    case 'RECEIVE_TRIPS':
      return { ...currentState, trips: action.payload };
      break;
    case 'INCREASE_LIKES':
      // var newState = {};
      return { ...currentState, likesCount: currentState.trips.likesCount + 1 };
      // return newState;

      break;
    default:
      return currentState;
  }
};

const initialState = {
  trips: []
};

const store = createStore(reducer, initialState);

const selectorTrip = ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
