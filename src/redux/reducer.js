import {
  GET_EMAILS
} from './actions.js';

const initialState = [];

export function emailsReducer( state=initialState, action ) {
  switch(action.type) {
    case GET_EMAILS:
      return [...action.payload.emails];
    default:
      return state;
  }
}
