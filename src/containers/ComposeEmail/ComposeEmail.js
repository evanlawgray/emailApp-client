import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { Form, Field, reduxForm } from 'redux-form';

import FlatButton from 'material-ui/FlatButton';

import { _sendEmail } from '../../redux/modules/sendEmail';

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
  constructor(props) {
    super(props);

    this.state = {
      composeEmailFeedback: undefined
    }

    this.submitEmailForm = this.submitEmailForm.bind( this );
  }

  submitEmailForm(values) {
    const newValues = { userId: this.props.userId, ...values }
    this.props.sendEmail( newValues );
  }

  componentWillReceiveProps( nextProps ) {
    const message = nextProps.sendEmailInfo.message;

    nextProps.sendEmailInfo.success && this.setState({
      composeEmailFeedback: message,
    });

    if(!nextProps.sendEmailInfo.success && nextProps.sendEmailInfo.message) {

      this.setState({composeEmailFeedback: message})
    }
  }

  render() {
    return (
      <div className={ styles.composeView }>
        {
          this.state.composeEmailFeedback && <div style={{height: 150, width: 200, background: 'blue'}}>{ this.state.composeEmailFeedback }</div>
        }

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
              onTouchTap={ this.props.hideSelf }
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
  userId: PropTypes.string,
  hideSelf: PropTypes.func
}

function mapStateToProps( state ) {
  return {
    userId: state.user.loggedInUserId,
    sendEmailInfo: state.sendEmail
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    sendEmail: (emailData) => dispatch( _sendEmail( emailData ) )
  }
}

const connectedForm = reduxForm({
  form: 'composeEmail'
})(ComposeEmail);

export default connect(mapStateToProps, mapDispatchToProps)(connectedForm);
