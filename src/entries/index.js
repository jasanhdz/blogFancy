import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

console.log('Esté es mi primer entrada!!');

const logger = ({getState, dispatch}) => next => action => {
  console.log('Este es mi estado anterior: ', getState())
  console.log('Vamos a envíar está acción', action);
  const value = next(action);
  console.log('Esté es mi nuevo estado: ', getState())
  return value;
}

const store = createStore(
  reducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)

const app = document.getElementById('app');

// ReactDom('que voy a renderear', 'donde lo voy a renderear');
ReactDOM.render(
  <Provider store={store}>
    <Home /> 
  </Provider>,
  app
);

