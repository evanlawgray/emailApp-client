import React from 'react';

import { Form, Field, reduxForm } from 'redux-form';

import FlatButton from 'material-ui/FlatButton';

import { validate } from './validatorFunctions';

import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

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

const ComposeEmailForm = props => {
  const { submitEmailForm, hideCompositionView, emailStatus, handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={ handleSubmit( submitEmailForm ) } className={ styles.composeForm }>
          <div className={ styles.metaFields }>
            <div>
              <Field
                name="recipient"
                component={ TextInput }
                type="text"
                placeholder="To..."
              />

              <Field
                name="subject"
                component={ TextInput }
                type="text"
                placeholder="Subject..."
              />
            </div>
          </div>

          <Field
            className={ styles.message }
            name="message"
            component={ TextArea }
            placeholder="Write your message here..."
          />

          <section className={ styles.buttonContainer }>
            <FlatButton
              label={ 'Cancel' }
              style={ cancelButtonStyles }
              disabled={ submitting }
              onTouchTap={
                emailStatus.isSending ?
                  () => false :
                  hideCompositionView
              }
            />

            <FlatButton
              label={ 'Send' }
              style={ sendButtonStyles }
              type='submit'
              disabled={ pristine || submitting }
            />
          </section>
        </Form>
  )
}

const ConnectedForm = reduxForm({
  form: 'composeEmail',
  validate
})( ComposeEmailForm );

export default ConnectedForm;
