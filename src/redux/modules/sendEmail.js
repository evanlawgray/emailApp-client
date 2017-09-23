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
      if( !response.ok ) {
        const errorPromise = response.text();

        return Promise.reject( errorPromise )
      }
      return response.text();
    }).then( ( text ) => {

      dispatch( sendEmail( text ) );
    }, ( error ) => {
      Promise.resolve( error )
        .then( errorMessage => {
          dispatch( sendEmailError( errorMessage ) );
        })
    });

}

// Reducer

export function sendEmailReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case SEND_EMAIL_START: {
      return {
        isSending: true,
        error: null,
        success: false,
        message: null,
      }
    }
    case SEND_EMAIL: {
      return {
        isSending: false,
        error: null,
        success: true,
        message: action.payload
      }
    }
    case SEND_EMAIL_ERROR: {
      return {
        isSending: false,
        error: true,
        success: false,
        message: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
