import React from 'react';

import Divider from 'material-ui/Divider';

import styles from './styles.css';

const Email = ({ email, isLast }) => {
  console.log( isLast );
  return (
    <div>
      <div className={ styles.emailContainer }>
        <div className={ styles.fullWidth }>
          <p>From: { email.author }</p>
        </div>
        <div className={ styles.fullWidth }>
          <p>To: { email.recipient }</p>
        </div>
        <div className={ styles.fullWidth }>
          <p>{ email.title }</p>
        </div>
        <div className={ styles.fullWidth }>
          <p>Subect: { email.subject }</p>
        </div>
        <div className={ styles.fullWidth }>
          <p>{ email.message }</p>
        </div>
      </div>

      {
        !isLast && <Divider />
      }
    </div>
  )
}

export default Email;
