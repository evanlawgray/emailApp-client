
const rootUrl = 'http://localhost:3001/';

const initialState = [];

export const FETCH_EMAILS = 'FETCH_EMAILS';

export const _fetchEmails = ( userId ) => ( dispatch ) => {
  fetch( `${ rootUrl }api/emails/${ userId }` )
  .then( response => {
    if ( !response.ok ) return Promise.reject();
    return response.json();
  })
  .then( json => {
    dispatch(
      {
        type: FETCH_EMAILS,
        payload: {
          emails: [...json]
        }
      }
    )
  });
}

// REDUCER

export function emailsReducer( state=initialState, action ) {
  switch( action.type ) {
    case FETCH_EMAILS:
      return [...action.payload.emails];
    default:
      return state;
  }
}
