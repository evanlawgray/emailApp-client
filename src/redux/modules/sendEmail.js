const rootUrl = 'http://localhost:3001/';

const initialState = [];

const SEND_EMAIL_START = 'SEND_EMAIL_START';
const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR';
const SEND_EMAIL = 'SEND_EMAIL'

// Action Creators

const sendEmailStart = ( userId ) => ({ type: SEND_EMAIL_START, payload: userId });
const sendEmailError = ( error ) => ({ type: SEND_EMAIL_ERROR, payload: error });
const sendEmail = ( emailData ) => ({ type: SEND_EMAIL, payload: emailData });

// Async function to send Email

export const _sendEmail = ( emailFormValues ) => ( dispatch ) => {

  const { userId, recipient } = emailFormValues;

  dispatch( sendEmailStart( userId ) );

  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const payload = JSON.stringify({
    ...emailFormValues
  });

  const init = {
    method: 'POST',
    headers: headers,
    body: payload,
    cache: 'default',
    credentials: 'true'
  };

  const request = new Request( `${rootUrl}api/sendEmail`, init )

  fetch( request )
    .then( response => {
      if( !response.ok ) return Promise.reject();
      return response.text();
    }).then( ( text ) => {
      dispatch( sendEmail( text ) );
    })
    .catch( error => {
      dispatch( sendEmailError( error ) );
    });
}

// Reducer

export function sendEmailReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case SEND_EMAIL_START: {
      return {
        isSending: true,
        error: null,
        message: null,
      }
    }
    case SEND_EMAIL: {
      return {
        isSending: false,
        error: null,
        message: action.payload
      }
    }
    case SEND_EMAIL_ERROR: {
      return {
        isSending: false,
        error: action.payload,
        message: null
      }
    }
    default: {
      return state;
    }
  }
}
