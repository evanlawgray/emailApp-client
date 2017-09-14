import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const EmailTextArea = () => {
  return (
    <textarea
      className={ styles.emailTextArea }
      name="textarea"
      rows="10"
      cols="50"
      placeholder="Write your message here..."
    >
    </textarea>
  )
}

export default EmailTextArea;
