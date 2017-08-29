import {
  GET_EMAILS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING
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

export function authReducer( state=initialState, action ) {
  switch( action.type ) {
    case LOGIN_USER_LOADING:
      return [
        {
          isLoading: true
        },
        {
          isLoggedIn: false
        },
        {
          loggedInUserId: null
        }
      ]
    case LOGIN_USER_ERROR:
      return [
        {
          isLoading: false
        },
        {
          isLoggedIn: false
        },
        {
          loggedInUserId: null
        }
      ]
    case LOGIN_USER:
      return [
        {
          isLoading: false
        },
        {
          isLoggedIn: true
        },
        {
          loggedInUserId: action.payload
        }
      ]
    default:
      return state;
  }
}
