import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import ComposeEmail from './ComposeEmail';

class ComposeEmailContainer extends Component {
  render() {
    return (
      <ComposeEmail userId={ this.props.userId } hideSelf={ this.hideSelf } />
    );
  }
}

function mapStateToProps( state ) {
  return {
    userId: state.user.loggedInUserId
  }
}

export default connect(mapStateToProps)(ComposeEmailContainer);
