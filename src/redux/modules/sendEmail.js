const rootUrl = 'http://localhost:3001/';

const initialState = {};

const SEND_EMAIL_START = 'SEND_EMAIL_START';
const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR';
const SEND_EMAIL = 'SEND_EMAIL'
const CLEAR_EMAIL_FEEDBACK = 'CLEAR_EMAIL_FEEDBACK';

// Action Creators

const sendEmailStart = ( userId ) => ({ type: SEND_EMAIL_START, payload: userId });
const sendEmailError = ( error ) => ({ type: SEND_EMAIL_ERROR, payload: error });
const sendEmail = ( emailData ) => ({ type: SEND_EMAIL, payload: emailData });
const clearEmailFeedback = () => ({ type: CLEAR_EMAIL_FEEDBACK })

// Async function to send Email

export const _sendEmail = ( emailFormValues ) => ( dispatch ) => {

  const { userId } = emailFormValues;

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
    }, error  => {
      Promise.resolve( error )
        .then( errorMessage => {
          dispatch( sendEmailError( errorMessage ) );
        })
    });
}

export const _clearEmailFeedback= () => (dispatch) => {
  dispatch( clearEmailFeedback() );
}

// Reducer

export function sendEmailReducer ( state = initialState, action ) {
  switch ( action.type ) {
    case SEND_EMAIL_START: {
      return {
        isSending: true,
        error: null,
        success: null,
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
    case CLEAR_EMAIL_FEEDBACK: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
