import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const EmailFeedback = ({ active, message }) => {
  return (
      <div className={ styles.feedbackBox }>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: styles.leaveActive
          }}
          transitionEnterTimeout={ 400 }
          transitionLeaveTimeout={ 400 }
        >
          {
            active && <p key='feedbackText' className={ styles.feedbackText }>{ message }</p>
          }
        </ReactCSSTransitionGroup>
      </div>
  );
}

EmailFeedback.propTypes = {
  message: PropTypes.string
}

export default EmailFeedback;
