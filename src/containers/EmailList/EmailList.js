import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import Email from '../../components/Email';

const listStyles = {
  height: 'auto',
  width: 600,
  margin: '0 auto',
  padding: 30,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const EmailList = ({ emails }) => {
  return (
    <Paper
      style={ listStyles }
      zDepth={ 1 }
      rounded={ false }
    >
      {
        emails ?
          emails.map( ( email, i ) => {
            return <Email email={ email } isLast={ i === emails.length -1 } />
          }) :
          <h3>No messages to display...</h3>
      }
    </Paper>
  )
}

export default EmailList;
