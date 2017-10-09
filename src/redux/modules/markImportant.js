import { _fetchEmails } from './fetchEmails';

const rootUrl = 'http://localhost:3001/';

const initialState = {};

const MAKE_IMPORTANT_START = 'MAKE_IMPORTANT_START';
const MAKE_IMPORTANT_ERROR = 'MAKE_IMPORTANT_ERROR';
const MAKE_IMPORTANT = 'MAKE_IMPORTANT';

// Action Creators

const makeImportantStart = ( messageId ) => ({ type: MAKE_IMPORTANT_START, payload: messageId });
const makeImportantError = ( messageId, errorMessage ) => ({ type: MAKE_IMPORTANT_ERROR, payload: { messageId, errorMessage } });
const makeImportant = ( messageId ) => ({ type: MAKE_IMPORTANT, payload: messageId });

// Async function to mark message as important

export const _markAsImportant = ( messageId, userId ) => ( dispatch ) => {
  const user = userId;
  console.log('userID is: ', user);
  dispatch( makeImportantStart( messageId ) );

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

  const myRequest = new Request( `${ rootUrl }api/updateImportance`, init );

  fetch( myRequest )
    .then( response => {
      if( !response.ok ) {
        const errorPromise = response.text();

        return Promise.reject( errorPromise )
      }

      return response.text();
    }).then( response => {
      dispatch( makeImportant( messageId ) );
      return;
    }).then( () => {
      dispatch( _fetchEmails( userId ) );
    }, error => {
      Promise.resolve( error )
        .then( errorMessage => {
          dispatch( makeImportantError( messageId, errorMessage ) );
        })
    })
}

export const markImportantReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case MAKE_IMPORTANT_START: {
      return {
        messageId: action.payload,
        isUpdating: true,
        error: null,
        success: null,
        message: null
      }
    }
    case MAKE_IMPORTANT_ERROR: {
      return {
        messageId: action.payload.messageId,
        isUpdating: false,
        error: true,
        success: false,
        message: action.payload.errorMessage
      }
    }
    case MAKE_IMPORTANT: {
      return {
        messageId: action.payload,
        isUpdating: false,
        error: false,
        success: true,
        message: 'The message was updated'
      }
    }
    default: {
      return {
        ...initialState
      }
    }
  }
}



