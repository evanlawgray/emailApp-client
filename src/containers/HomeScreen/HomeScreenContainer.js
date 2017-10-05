import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './styles.css';

import EmailsViewContainer from '../EmailsView';

class HomeScreenContainer extends Component {
  render() {
    return (
      <div className={ styles.contentContainer }>
        {
          this.props.userInfo.isLoggedIn ? (

            <EmailsViewContainer />
          ) : <h3 className={ styles.welcomeHeader }>Please sign in to view your messages...</h3>
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

export default connect(mapStateToProps)(HomeScreenContainer);
