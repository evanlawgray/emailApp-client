import React from 'react';

import Paper from 'material-ui/Paper';

import Email from '../../components/Email';

const listStyles = {
  height: 'auto',
  width: '90%',
  maxWidth: 700,
  margin: '3vh auto',
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
            return <Email email={ email } isLast={ i === emails.length -1 } key={ Date.now() + i } />
          }) :
          <h3>No messages to display...</h3>
      }
    </Paper>
  )
}

export default EmailList;
