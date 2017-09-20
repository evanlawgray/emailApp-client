import { combineReducers } from 'redux';

import { emailsReducer } from './modules/fetchEmails';
import { signupReducer, authReducer } from './modules/auth';

export default combineReducers({
  emails: emailsReducer,
  user: authReducer,
  signUp: signupReducer
});

