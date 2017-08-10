export const GET_EMAILS = 'GET_EMAILS';

const rootUrl = 'http://localhost:3001/api';

export const getEmails = ( userId ) => {
  return ( dispatch ) => {
    fetch( `${ rootUrl }/emails/${ userId }` )
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
}
