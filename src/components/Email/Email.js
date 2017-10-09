import React from 'react';

import Divider from 'material-ui/Divider';

import ImportantIcon from '../../containers/ImportantIcon';

import styles from './styles.css';

const Email = ({ email, isLast }) => {
  console.log('THIS EMAIL HAS AN ID OF: ', email.id);
  return (
    <div className={ styles.emailContainer }>
      <ImportantIcon isImportant={ email.isimportant } messageId={ email.id }/>

      <div className={ styles.fullWidth }>
        <p>From: { email.author }</p>
      </div>

      <div className={ styles.fullWidth }>
        <p>To: { email.recipient }</p>
      </div>

      <div className={ styles.fullWidth }>
        <p>Subect: { email.subject }</p>
      </div>

      <div className={ styles.message }>
        <p>{ email.message }</p>
      </div>

      {
        !isLast && <Divider />
      }
    </div>
  )
}

export default Email;
