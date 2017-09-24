import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const EmailFeedback = ({ message }) => {
  return (
    <div className={ styles.feedbackBox }>
      <p>{ message }</p>
    </div>
  );
}

EmailFeedback.propTypes = {
  message: PropTypes.string
}

export default EmailFeedback;
