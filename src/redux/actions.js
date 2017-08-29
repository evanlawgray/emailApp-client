export const GET_EMAILS = 'GET_EMAILS';
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';

const rootUrl = 'http://localhost:3001/';

const loginUserLoading = () => ({type: LOGIN_USER_LOADING});
const loginUserError = ( error ) => ({type: LOGIN_USER_ERROR, payload: error});
const loginUser = ( userInfo ) => ({type: LOGIN_USER, payload: userInfo});

export const getEmails = ( userId ) => ( dispatch ) => {
  fetch( `${ rootUrl }/api/emails/${ userId }` )
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

export const _loginUser = ( userInfo ) => ( dispatch ) => {
  dispatch( loginUserLoading() );

  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const payload = JSON.stringify({
    ...userInfo
  });

  const init = {
    method: 'POST',
    headers: headers,
    body: payload,
    cache: 'default',
    credentials: 'true'
  };

  const request = new Request( `${rootUrl}auth/login`,init );

  fetch( request )
  .then( response => {
    if( !response.ok ) return Promise.reject();
    return response.text();
  }).then( userInfo => {
    console.log('console says:', userInfo)
    dispatch( loginUser(`${userInfo}`));
  }).catch( error => dispatch( loginUserError( error ) ) );
}
