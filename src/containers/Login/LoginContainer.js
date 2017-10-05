import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Login from './Login';

class LoginContainer extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;

    return (
      <Route render={ props => (
        isLoggedIn ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        ) : (
          <Login />
        )
      )}/>
    );
  }
}

LoginContainer.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.oneOfType([ PropTypes.bool, PropTypes.symbol ]),
    isLoggedIn: PropTypes.bool,
    loggedInUserId: PropTypes.string
  })
}

const mapStateToProps = ( state ) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user
  }
}

export default connect( mapStateToProps )(LoginContainer);
