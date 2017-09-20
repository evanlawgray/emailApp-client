import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const EmailTextArea = ({ value, onChange }) => {
  return (
    <textarea
      value={ value }
      onChange={ onChange }
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
