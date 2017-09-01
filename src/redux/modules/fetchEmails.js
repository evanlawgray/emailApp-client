
const rootUrl = 'http://localhost:3001/';

const initialState = [];

export const GET_EMAILS = 'GET_EMAILS';

export const getEmails = ( userId ) => ( dispatch ) => {
  fetch( `${ rootUrl }api/emails/${ userId }` )
  .then( response => {
    if ( !response.ok ) return Promise.reject();
    return response.json();
  })
  .then( json => {
    dispatch(
      {
        type: GET_EMAILS,
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
    case GET_EMAILS:
      return [...action.payload.emails];
    default:
      return state;
  }
}
