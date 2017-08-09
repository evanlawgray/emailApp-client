import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.css';

class HomeScreenContainer extends Component {

  render() {
    return (
      <div className='contentContainer'>
        <h2 className='welcomeHeader'>Hello, Welcome to your email client</h2>
      </div>

    )
  }
}

export default HomeScreenContainer;
