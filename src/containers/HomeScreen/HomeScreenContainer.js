import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loginUser } from '../../redux/modules/auth';

import styles from './styles.css';

import EmailsViewContainer from '../EmailsView';

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

class HomeScreenContainer extends Component {
  componentDidMount() {
    const userId = getCookie('user_id');
    const sessionCookie = getCookie('email_session');

    sessionCookie && this.props.resumeSession(userId);
  }

  render() {
    return (
      <div className={ styles.contentContainer }>
        {
          getCookie('email_session') ?
            <EmailsViewContainer userId={getCookie('user_id') || ''}/>
            : <h3 className={ styles.welcomeHeader }>Please sign in to view your messages...</h3>
        }
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    composeEmailForm: state.form.composeEmail,
    userInfo: state.user
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    resumeSession: userId => dispatch( loginUser( userId ) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);
