import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App'
import thunk from 'redux-thunk';
import { counter } from './index.redux'

const reduxDevtools = window.devToolsExtension() || {};
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

ReactDOM.render(
  (<Provider>
    <App store={store} />
  </Provider>),
  document.getElementById('root')
)