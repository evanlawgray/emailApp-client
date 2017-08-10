import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmailListContainer from '../EmailList';

import styles from './styles.css';

class HomeScreenContainer extends Component {
  constructor() {
    super();

    this.state = {
      signedIn: true
    }
  }

  render() {
    return (
      <div className={ styles.contentContainer }>
        <h2 className={ styles.welcomeHeader }>Hello, Welcome to your email client</h2>
        {
          this.state.signedIn ?
            <EmailListContainer /> :
            <h3 className={ styles.welcomeHeader }>Please sign in to view your messages...</h3>
        }
      </div>

    )
  }
}

export default HomeScreenContainer;
