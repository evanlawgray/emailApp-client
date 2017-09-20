import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reduxLogger from 'redux-logger';

import mainReducer from './reducers';

export default createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxLogger,
    thunk
  )
);
