import React, { Component } from 'react';

import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles.css';

import EmailListContainer from '../EmailList';
import ComposeEmail from '../ComposeEmail/index';

class EmailsViewContainer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      composing: false
    }
  }

  showCompositionView() {
    this.setState({composing: true});
  }

  hideCompositionView() {
    this.setState({composing: false});
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
                userId={ this.props.userInfo.userId }
                hideCompositionView={ () => this.hideCompositionView() }
              />
          }

          <EmailListContainer showCompositionView={ () => this.showCompositionView() } />
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

export default connect( mapStateToProps )( EmailsViewContainer );
