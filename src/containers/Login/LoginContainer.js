import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Login from './Login';

class LoginContainer extends Component {
  componentDidMount() {
    console.log('MOUNTED')
    console.log( 'isLoggedIn:', this.props.isLogged )
  }

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

const mapStateToProps = ( state ) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user
  }
}

export default connect( mapStateToProps )(LoginContainer);
