import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { emailsReducer } from './modules/fetchEmails';
import { sendEmailReducer } from './modules/sendEmail';
import { signupReducer, authReducer } from './modules/auth';
import { markImportantReducer } from './modules/markImportant';
import { deleteEmailReducer } from './modules/deleteEmail';

export default combineReducers({
  emails: emailsReducer,
  sendEmail: sendEmailReducer,
  user: authReducer,
  signUp: signupReducer,
  markAsImportant: markImportantReducer,
  deleteEmail: deleteEmailReducer,
  form: reduxFormReducer
});

