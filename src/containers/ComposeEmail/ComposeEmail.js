import React from 'react';

import { Field, reduxForm } from 'redux-form';

import FlatButton from 'material-ui/FlatButton';

import styles from './styles.css';

const cancelButtonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: '10px'
}

const sendButtonStyles = {
  height: '50px',
  width: '130px',
  margin: '0',
  padding: '10px'
}

const ComposeEmail = ({ handleSubmit, hideSelf, pristine, reset, submitting }) => {

  return (
    <div className={ styles.composeView }>
      <h2>Compose</h2>
      <form onSubmit={ handleSubmit } className={ styles.composeForm }>
        <div className={ styles.metaFields }>
          <div>
            <Field
              className={ styles.recipient }
              name="recipient"
              component="input"
              type="text"
              placeholder="To..."
            />
          </div>
        </div>

        <Field
          className={ styles.message }
          name="message"
          component="textarea"
          placeholder="Write your message here..."
        />

        <section className={ styles.buttonContainer }>
          <FlatButton
            label={'Cancel'}
            style={cancelButtonStyles}
            onTouchTap={ hideSelf }
          />
          <FlatButton
            label={'Send'}
            style={sendButtonStyles}
          />
        </section>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'composeEmail'
})(ComposeEmail);
