import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
  constructor(props) {
    super(props);

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

  componentDidUpdate( prevProps, prevState ) {
    if( this.state.composeEmailFeedback && this.state.composeEmailFeedback !== prevState.composeEmailFeedback ) {
      this.setState({
        showFeedback: true
      })
    }

    setTimeout( () => {
      this.setState({
        showFeedback: false
      });

      this.props.sendEmailInfo.success && this.props.hideSelf();
    }, 12000);

  }

  componentWillReceiveProps( nextProps ) {
    const isActive = nextProps.active;
    const message = nextProps.sendEmailInfo.message;
    const success = nextProps.sendEmailInfo.success;

    if(this.props.active === !isActive) {
      this.props.reset();
      this.props.clearEmailFeedback();
    }

    if(success && message) {
      this.setState({
        composeEmailFeedback: message,
      });
    }

    if(!success && message) {
      this.setState({
        composeEmailFeedback: message,
      });
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: styles.leaveActive
          }}
          transitionEnterTimeout={ 250 }
          transitionLeaveTimeout={ 150 }
        >
        {
          this.props.active &&
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
        }
      </ReactCSSTransitionGroup>
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
    sendEmail: (emailData) => dispatch( _sendEmail( emailData ) ),
    clearEmailFeedback: () => dispatch( _clearEmailFeedback( ) )
  }
}

const connectedForm = reduxForm({
  form: 'composeEmail'
})(ComposeEmail);

export default connect(mapStateToProps, mapDispatchToProps)(connectedForm);
