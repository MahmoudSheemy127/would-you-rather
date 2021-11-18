import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { logger } from './middleware/logger';
import { Provider } from 'react-redux';

const store = createStore(reducers,applyMiddleware(thunk,logger));

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

