export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';

export const SIGNUP_USER_LOADING = 'SIGNUP_USER_LOADING';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';
export const SIGNUP_USER = 'SIGNUP_USER';

const rootUrl = 'http://localhost:3001/';

const loginUserLoading = () => ({type: LOGIN_USER_LOADING});
const loginUserError = ( error ) => ({type: LOGIN_USER_ERROR, payload: error});
const loginUser = ( userInfo ) => ({type: LOGIN_USER, payload: userInfo});

const signupUserLoading = () => ({type: SIGNUP_USER_LOADING});
const signupUserError = ( error ) => ({type: SIGNUP_USER_ERROR, payload: error});
const signupUser = ( message ) => ({type: SIGNUP_USER, payload: message});

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

export const _signupUser = ( userInfo ) => ( dispatch ) => {
  dispatch( signupUserLoading() );

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

  const request = new Request( `${rootUrl}auth/signup`, init );

  fetch( request )
    .then( response => {
      if(!response.ok) return Promise.reject();

      return response.text()
    }).then( resText => {
      console.log(resText);
      dispatch( signupUser( resText ) )
    }).catch( error => {
      console.log(error);
      dispatch( signupUserError( error ) );
    });
}
