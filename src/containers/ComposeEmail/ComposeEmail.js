import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import EmailForm from './ComposeEmailForm';
import EmailFeedback from '../../components/EmailFeedback';

import { _sendEmail } from '../../redux/modules/sendEmail';
import { _clearEmailFeedback } from '../../redux/modules/sendEmail';

import styles from './styles.css';

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
        <EmailForm
          submitEmailForm={ this.submitEmailForm }
          hideCompositionView={ this.props.hideCompositionView }
          emailStatus={ this.props.sendEmailInfo }
        />
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

export default connect( mapStateToProps, mapDispatchToProps )( ComposeEmail );
