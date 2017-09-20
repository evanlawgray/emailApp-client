import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { emailsReducer } from './modules/fetchEmails';
import { signupReducer, authReducer } from './modules/auth';

export default combineReducers({
  emails: emailsReducer,
  user: authReducer,
  signUp: signupReducer,
  form: reduxFormReducer
});

