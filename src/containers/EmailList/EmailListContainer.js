import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getEmails } from '../../redux/modules/fetchEmails';

import EmailList from './EmailList';

class EmailListContainer extends Component {

  componentDidMount() {
    this.props.getEmails(1);
  }

  render() {
    return(
      <EmailList emails={ this.props.emails } />
    );
  }
}

function mapStateToProps(state) {
  return {
    emails: state.emails
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEmails: ( userId ) => {
      dispatch(getEmails( userId ))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailListContainer);
