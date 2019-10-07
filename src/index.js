import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './store/reducer';
import App from './App';
import './Css/index.css';

const reducer = (currentState, action) => {
  switch (action.type) {
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

// getData = () => {
//   fetch('http://localhost:4000/Trips')
//     .then(res => res.json())
//     .then(trips => {
//       this.setState({ trips });
//     });
// };

// componentDidMount = () => {
//   this.getData();
// };

const store = createStore(reducer, initialState);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
