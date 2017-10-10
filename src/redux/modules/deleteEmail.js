import { _fetchEmails } from './fetchEmails';

const rootUrl = 'http://localhost:3001/';

const initialState = {};

const DELETE_EMAIL_START = 'DELETE_EMAIL_START';
const DELETE_EMAIL_ERROR = 'DELETE_EMAIL_ERROR';
const DELETE_EMAIL = 'DELETE_EMAIL';

// Action Creator

const deleteEmailStart = ( messageId ) => ({ type: DELETE_EMAIL_START, payload: messageId });
const deleteEmailError = ( messageId, errorMessage ) => ({ type: DELETE_EMAIL_ERROR, payload: messageId });
const deleteEmail = ( messageId ) => ({ type: DELETE_EMAIL, payload: messageId });

// Async function to delete message from database

export const _deleteEmail = ( messageId, userId ) => ( dispatch ) => {
  dispatch( deleteEmailStart( messageId ) );

  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const payload = JSON.stringify({ messageId });

  const init = {
    method: 'POST',
    headers: headers,
    body: payload,
    cache: 'default',
    credentials: 'true'
  }

  const myRequest = new Request( `${ rootUrl }api/deleteEmail`, init );

  fetch( myRequest )
    .then( response => {
      if( !response.ok ) {
        const errorText = response.text();

        return Promise.reject( errorText );
      }
      return response.text();
    }).then( () => {
      dispatch( deleteEmail( messageId ) );
    }).then( () => {
      dispatch( _fetchEmails( userId ) );
    }, ( error ) => {
      Promise.resolve( error )
        .then( errorMessage => {
          dispatch( deleteEmailError( messageId, errorMessage ) );
        });
    });
}

// Reducer

export const deleteEmailReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case DELETE_EMAIL_START: {
      return {
        messageId: action.payload,
        isDeleting: true,
        error: null,
        success: null,
        message: null,
      }
    }
    case DELETE_EMAIL_ERROR: {
      return {
        messageId: action.payload.messageId,
        isDeleting: false,
        error: true,
        success: false,
        message: action.payload.errorMessage
      }
    }
    case DELETE_EMAIL: {
      return {
        messageId: action.payload,
        isDeleting: false,
        error: false,
        success: true,
        message: null
      }
    }
    default: {
      return {
        ...initialState
      }
    }
  }
}


