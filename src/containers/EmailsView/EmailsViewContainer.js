import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles.css';

import { _fetchEmails } from '../../redux/modules/fetchEmails';

import EmailListContainer from '../EmailList';
import ComposeEmail from '../ComposeEmail';

class EmailsViewContainer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      composing: false
    }
  }
  updateEmailList() {
    console.log('FROM updateEmailList:', this.props.userId);
    this.props.getEmails( this.props.userId );
  }

  showCompositionView() {
    this.setState({ composing: true });
  }

  hideCompositionView() {
    this.setState({ composing: false });
  }

  render() {
    const composing = this.state.composing;

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: styles.leaveActive
          }}
          transitionEnterTimeout={ 250 }
          transitionLeaveTimeout={ 250 }
        >

          {
            composing &&
              <ComposeEmail
                userId={ this.props.userId }
                hideCompositionView={ () => this.hideCompositionView() }
                updateEmailList={ () => this.updateEmailList() }
              />
          }

          <EmailListContainer userId={this.props.userId} showCompositionView={ () => this.showCompositionView() } />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    userInfo: state.user
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    getEmails: ( userId ) => {
      dispatch(_fetchEmails( userId ))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EmailsViewContainer );
