import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { _deleteEmail } from '../../redux/modules/deleteEmail';

import styles from './styles.css';

import DeleteButton from './DeleteButton';

class DeleteButtonContainer extends Component {
  deleteEmail() {
    const userId = this.props.userId;
    const messageId = this.props.messageId;

    this.props.deleteEmail( messageId, userId );
  }

  render() {
    return(
      <div
        className={ styles.deleteButton }
        onTouchTap={ () => this.deleteEmail() }
      >
        <DeleteButton />
      </div>
    )
  }
}

DeleteButtonContainer.propTypes = {
  messageId: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  deleteEmail: PropTypes.func
}

function mapStateToProps( state ) {
  return {
    userId: state.user.loggedInUserId
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    deleteEmail: ( messageId, userId ) => {
      dispatch( _deleteEmail( messageId, userId ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( DeleteButtonContainer );
