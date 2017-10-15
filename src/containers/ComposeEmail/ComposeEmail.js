import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { Form, Field, reduxForm } from 'redux-form';

import FlatButton from 'material-ui/FlatButton';

import EmailFeedback from '../../components/EmailFeedback';

import { _sendEmail } from '../../redux/modules/sendEmail';
import { _clearEmailFeedback } from '../../redux/modules/sendEmail';

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

class ComposeEmail extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      composeEmailFeedback: undefined,
      showFeedback: false
    }

    this.submitEmailForm = this.submitEmailForm.bind( this );
  }

  submitEmailForm(values) {
    const newValues = { userId: this.props.userId, ...values }
    this.props.sendEmail( newValues );
  }

  componentWillUnmount() {
    this.props.updateEmailList();
  }

  componentDidUpdate( prevProps, prevState ) {
    const emailWasSent = this.props.sendEmailInfo.success;

    if( this.state.composeEmailFeedback && emailWasSent !== prevProps.sendEmailInfo.success ) {
      this.setState({
        showFeedback: true
      });

      if( emailWasSent ) {
        setTimeout( () => {
          this.props.hideCompositionView();
        }, 1800);
      } else if( emailWasSent === false ) {
        setTimeout( () => {
          this.setState({
            showFeedback: false
          });
        }, 7000)
      }
    }
  }

  componentWillReceiveProps( nextProps ) {
    const message = nextProps.sendEmailInfo.message;

    if( message ) {
      this.setState({
        composeEmailFeedback: message,
      });
    }
  }

  render() {
    return (
      <div className={ styles.composeView }>
        <EmailFeedback
          active={ this.state.showFeedback }
          message={ this.state.composeEmailFeedback }
        />

        <h2>Compose</h2>
        <Form onSubmit={ this.props.handleSubmit( this.submitEmailForm ) } className={ styles.composeForm }>
          <div className={ styles.metaFields }>
            <div>
              <Field
                className={ styles.recipient }
                name="recipient"
                component="input"
                type="text"
                placeholder="To..."
              />

              <Field
                className={ styles.subject }
                name="subject"
                component="input"
                type="text"
                placeholder="Subject..."
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
              label={ 'Cancel' }
              style={ cancelButtonStyles }
              onTouchTap={
                this.props.sendEmailInfo.isSending ?
                  () => false :
                  this.props.hideCompositionView
              }
            />

            <FlatButton
              label={ 'Send' }
              style={ sendButtonStyles }
              type='submit'
            />
          </section>
        </Form>
      </div>
    );
  }
}

ComposeEmail.propTypes = {
  userId: PropTypes.string.isRequired,
  sendEmailInfo: PropTypes.shape({
    isSending: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    message: PropTypes.string
  }),
  hideCompositionView: PropTypes.func.isRequired,
  updateEmailList: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  clearEmailFeedback: PropTypes.func.isRequired
}

function mapStateToProps( state ) {
  return {
    userId: state.user.loggedInUserId,
    sendEmailInfo: state.sendEmail
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    sendEmail: ( emailData ) => dispatch( _sendEmail( emailData ) ),
    clearEmailFeedback: () => dispatch( _clearEmailFeedback( ) )
  }
}

const connectedForm = reduxForm({
  form: 'composeEmail'
})( ComposeEmail );

export default connect( mapStateToProps, mapDispatchToProps )( connectedForm );
