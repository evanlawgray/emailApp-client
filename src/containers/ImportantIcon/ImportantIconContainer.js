import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { _markAsImportant } from '../../redux/modules/markImportant';

import styles from './styles.css';

import ImportantIcon from './ImportantIcon';

class ImportantIconContainer extends Component {
  toggleImportance() {
    console.log('from component, userID is:', this.props.userId);
    this.props.markAsImportant( this.props.messageId, this.props.userId );
  }

  render() {
    const isImportant = this.props.isImportant;
    const messageId = this.props.messageId;

    console.log( this.props.isImportant );

    return(
      <div
        className={ styles.importantIcon }
        onTouchTap={ () => this.toggleImportance( messageId ) }
      >
        <ImportantIcon isImportant={ isImportant } />
      </div>
    )
  }
}

ImportantIconContainer.propTypes = {
  isImportant: PropTypes.bool
}

function mapStateToProps( state ) {
  return {
    userId: state.user.loggedInUserId
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    markAsImportant: ( messageId, userId ) => {
      dispatch( _markAsImportant( messageId, userId ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( ImportantIconContainer );
