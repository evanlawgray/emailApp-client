import React from 'react';

import Divider from 'material-ui/Divider';

import DeleteButton from '../../containers/DeleteButton';
import ImportantIcon from '../../containers/ImportantIcon';

import styles from './styles.css';

const Email = ({ email, isLast }) => {
  return (
    <div className={ styles.emailContainer }>
      <DeleteButton messageId={ email.id } />
      <ImportantIcon isImportant={ email.isimportant } messageId={ email.id } />

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
