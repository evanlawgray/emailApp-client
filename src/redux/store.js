import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reduxLogger from 'redux-logger';

import { emailsReducer, authReducer, signupReducer } from './reducer';

export default createStore(
  combineReducers({
    emails: emailsReducer,
    user: authReducer,
    signup: signupReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxLogger,
    thunk
  )
);
